"use client"

import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function GlobeMesh() {
  const globeRef = useRef<THREE.Mesh>(null)
  const [texture, setTexture] = useState<THREE.Texture | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loader = new THREE.TextureLoader()
    loader.crossOrigin = "anonymous"

    try {
      loader.load(
        "/assets/3d/texture_earth.jpg",
        (loadedTexture) => {
          setTexture(loadedTexture)
        },
        undefined,
        (err) => {
          console.error("Error loading texture:", err)
          setError("Failed to load texture")
        },
      )
    } catch (err) {
      console.error("Error setting up texture:", err)
      setError("Failed to setup texture")
    }

    return () => {
      if (texture) {
        texture.dispose()
      }
    }
  }, [texture])

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001
    }
  })

  if (error) {
    return null
  }

  return (
    <Sphere ref={globeRef} args={[1, 64, 64]}>
      <meshPhongMaterial map={texture} bumpScale={0.05} shininess={5} opacity={0.8} transparent />
    </Sphere>
  )
}

export default function Globe() {
  return (
    <Canvas camera={{ position: [0, 0, 2.5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <GlobeMesh />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}
