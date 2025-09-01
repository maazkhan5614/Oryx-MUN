export default function RegisterSection() {
  const handleRegisterClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSf97fX5SQZYVjwHIMNy-8fYauJll-OJGAovYpZyuzm0pzcrDw/viewform?usp=header",
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <section id="register" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-primary">Register for Oryx MUN</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8">
          Join us for an unforgettable experience of diplomacy, debate, and global awareness.
        </p>
        <button
          onClick={handleRegisterClick}
          className="bg-primary text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Download forum
        </button>
      </div>
    </section>
  )
}
