"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronRight } from "lucide-react"
import { useEffect } from "react"

export default function CommitteesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-[72px]">
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Committees</h1>
            <p className="text-lg text-center max-w-2xl mx-auto">
              Explore our diverse range of committees and engage in meaningful debates on pressing global issues.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {/* COMMITTEE 1: GA1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    GA1: Disarmament and International Security
                  </h2>
                  <p className="text-gray-600 mb-6">
                    The First Committee deals with disarmament, global challenges and threats to peace that affect the
                    international community.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary border-b border-primary pb-2">
                        Committee Leadership
                      </h3>
                      <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100">
                        <div className="mb-4">
                          <p className="font-bold text-primary text-lg">Chair</p>
                          <p className="text-gray-700 text-lg">Khadijah Rabbani</p>
                        </div>
                        <div>
                          <p className="font-bold text-primary text-lg">Co-Chair</p>
                          <p className="text-gray-700 text-lg">Rulan Rossouw</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary">Committee Topics</h3>
                      <div className="space-y-4">
                        <Link
                          href="https://docs.google.com/document/d/1y79-C5JWzAbgdBVaA5T4W-uPMygO0mPM/edit?usp=sharing&ouid=107799025093698157272&rtpof=true&sd=true"
                          className="flex items-center justify-between p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="font-medium text-primary">
                            The issue of enhancing UN mechanisms to prevent arm sales to active war zones
                          </span>
                          <ChevronRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                          href="https://docs.google.com/document/d/1UmOnpoRyHLht4fK0qq550WpaWdsPOU-F/edit?usp=sharing&ouid=107799025093698157272&rtpof=true&sd=true"
                          className="flex items-center justify-between p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                        >
                          <span className="font-medium text-primary">The issue of regulating the role of private military contractors in armed conflicts
</span>
                          <ChevronRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* COMMITTEE 2: Security Council */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Security Council</h2>
                  <p className="text-gray-600 mb-6">
                    The Security Council has primary responsibility for the maintenance of international peace and
                    security.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary border-b border-primary pb-2">
                        Committee Leadership
                      </h3>
                      <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100">
                        <div className="mb-4">
                          <p className="font-bold text-primary text-lg">Chair</p>
                          <p className="text-gray-700 text-lg">Sanahas Kodisinghe</p>
                        </div>
                        <div>
                          <p className="font-bold text-primary text-lg">Co-Chair</p>
                          <p className="text-gray-700 text-lg">Samuel Louis</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary">Committee Topics</h3>
                      <div className="space-y-4">
                        <Link
                          href="https://docs.google.com/document/d/1iJCBrcM7FoL_fg01g3M2xbHpzCY53ygJ/edit?usp=sharing&ouid=107799025093698157272&rtpof=true&sd=true"
                          className="flex items-center justify-between p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                        >
                          <span className="font-medium text-primary">The issue of mitigating airspace violations and military escalations in the Aegean</span>
                          <ChevronRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                          href="https://docs.google.com/document/d/1mCgniFfPl2wRy79xCkoYpKmZFK6jjyy_/edit?usp=sharing&ouid=107799025093698157272&rtpof=true&sd=true"
                          className="flex items-center justify-between p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                        >
                          <span className="font-medium text-primary">
                            The issue of stabilising Haiti amid escalating gang violence and political collapse 

                          </span>
                          <ChevronRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* COMMITTEE 3: ECOSOC */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    ECOSOC: Economic and Social Council
                  </h2>
                  <p className="text-gray-600 mb-6">
                    ECOSOC is the principal body for coordination, policy review, policy dialogue and recommendations on
                    economic, social and environmental issues.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary border-b border-primary pb-2">
                        Committee Leadership
                      </h3>
                      <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100">
                        <div className="mb-4">
                          <p className="font-bold text-primary text-lg">Chair</p>
                          <p className="text-gray-700 text-lg">Anvi Joshi</p>
                        </div>
                        <div>
                          <p className="font-bold text-primary text-lg">Co-Chair</p>
                          <p className="text-gray-700 text-lg">Nicole Claudio</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary">Committee Topics</h3>
                      <div className="space-y-4">
                        <Link
                          href="https://docs.google.com/document/d/1wBES9510pqLLHaZsYeunety9iNwX-Uh2/edit?usp=sharing&ouid=107799025093698157272&rtpof=true&sd=true"
                          className="flex items-center justify-between p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                        >
                          <span className="font-medium text-primary">The issue of balancing national economic interests with global and international investment

</span>
                          <ChevronRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                          href="https://docs.google.com/document/d/1Au8HlzYIs7swSlTdabqRTGhvg0_jCfm_/edit?usp=sharing&ouid=107799025093698157272&rtpof=true&sd=true"
                          className="flex items-center justify-between p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                        >
                          <span className="font-medium text-primary">Strengthening Global Efforts to End Human Trafficking and Modern Slavery 
</span>
                          <ChevronRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
