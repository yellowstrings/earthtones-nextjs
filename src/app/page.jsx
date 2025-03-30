// import Image from 'next/image'
import Header from '../../pages/components/header.jsx'
import Footer from '../../pages/components/footer.jsx'
import YoutubeEmbed from "../../pages/components/video.jsx"
import About from "../../pages/components/about.jsx"
import Music from "../../pages/components/music.jsx"
import Contact from "../../pages/components/contact.jsx"

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
