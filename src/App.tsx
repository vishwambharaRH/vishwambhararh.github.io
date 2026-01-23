import { BrowserRouter, Routes, Route } from "react-router-dom"
import GalleryPage from "./pages/GalleryPage"

// Import your existing homepage sections
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Background from "./components/Background"

function Home() {
  return (
    <main className="min-h-screen text-white">
      {/* Keep your background / lightrays exactly as it is */}
      <Background />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  )
}
