// import Image from 'next/image'
import Header from '../../pages/components/header.js'
import Footer from '../../pages/components/footer.js'
import YoutubeEmbed from "../../pages/components/video.js"
import About from "../../pages/components/about.js"
import Music from "../../pages/components/music.js"
import Contact from "../../pages/components/contact.js"

export default function Home() {


  return (
    <main className="vines">
      <div >
        <Header />
      </div>
      <div className="video-container">
        <YoutubeEmbed />
      </div>
      <div >
        <About />
        <Music />
        <Contact />
      </div>
      <div className="sticky-bottom">
        <Footer />
      </div>
    </main>
  )
}
