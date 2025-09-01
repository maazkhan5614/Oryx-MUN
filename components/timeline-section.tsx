import Timeline from "./timeline"

export default function TimelineSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-primary">Conference Schedule</h2>
        <Timeline />
      </div>
    </section>
  )
}
