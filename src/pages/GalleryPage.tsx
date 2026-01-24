import Navbar from "../components/Navbar"
import PhotoGallery from "../components/PhotoGallery"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <Navbar />

      {/* top spacing because navbar is fixed */}
      <div className="pt-28">
        <PhotoGallery />
      </div>
    </main>
  )
}
