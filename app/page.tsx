import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar"

import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

import Testimonials from "@/components/Testimonials"
import Roadmap from "@/components/Roadmap"
import Services from "@/components/Services"


import Contact from "@/components/Contact"
import Footer from "@/components/Footer"



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />

      <Testimonials />
      <Roadmap />
      <Services />

      <Contact />
      {/* <Footer /> */}

    </>
  )
}