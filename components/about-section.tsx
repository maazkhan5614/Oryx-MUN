import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-primary">About OIS MUN</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="pl-6 sm:pl-8">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">
                  Empowering Future Leaders Through Global Dialogue
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6">
                  Oryx International School Model United Nations (OISMUN) is a simulation of the United Nations that
                  aims to educate participants about current events, topics in international relations, diplomacy and
                  the United Nations agenda.
                </p>
                <p className="text-base sm:text-lg text-gray-600 mb-8">
                  Our conference provides an opportunity for students to develop their public speaking, critical
                  thinking, and problem-solving skills while fostering a global perspective.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BAE7E407F-7DA0-4EB6-9EEC-37261391D946%7D-cyBqSkPgSYPLHBxHakS2CeTKloHz8D.png"
                      alt="MUN Director"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Mr. Charles Amaso</p>
                    <p className="text-sm text-gray-600">MUN Director, Oryx International School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rnNRCYRdXIFzf1RbBZEL9ZGNEC6rqX.png"
              alt="OIS MUN Delegates"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
