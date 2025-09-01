"use client"

import { motion } from "framer-motion"
import { FileDown } from "lucide-react"
import Image from "next/image"

export default function HandbookSection() {
  const handleDownload = () => {
    // Google Drive direct download link
    // Replace FILE_ID with your actual Google Drive file ID
    const fileId = "YOUR_GOOGLE_DRIVE_FILE_ID"
    const googleDriveUrl = `https://drive.google.com/file/d/1GcMtO_zCh5KW9TEzLxFTG91iPlJsLM_l/view?usp=sharing`

    // Create a temporary link element and trigger the download
    const link = document.createElement("a")
    link.href = googleDriveUrl
    link.setAttribute("download", "OIS_MUN_Delegate_Handbook.pdf")
    link.setAttribute("target", "_blank")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-primary">Delegate Handbook</h2>

        <div className="max-w-md mx-auto">
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image src="/images/handbook-cover.png" alt="OIS MUN Delegate Handbook" fill className="object-cover" />
            </div>

            <div className="p-6">
              <motion.button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 w-full bg-primary text-white px-4 py-3 rounded-md text-base font-medium hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileDown className="w-5 h-5" />
                Download Handbook
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
