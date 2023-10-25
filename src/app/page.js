import Image from 'next/image'
import Header from '../../pages/components/header.js'
import Footer from '../../pages/components/footer.js'
import YoutubeEmbed from "../../pages/components/video.js"
import About from "../../pages/components/about.js"
import Tour from "../../pages/components/tour.js"
import Contact from "../../pages/components/contact.js"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

export default function Home() {


  return (
    <main className="vines">
      <div >
        <Header />
        <YoutubeEmbed />
      </div>
      <div >
        <About />
      </div>
      <div className="spacer">
        <Tour />
        <Contact />
      </div>
      <div className="sticky-bottom">
        <Footer />
      </div>
    </main>
  )
}
