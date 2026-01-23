import { useMemo, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type Category = "Architecture" | "Urbanscape" | "Landscape" | "Nature"

type PhotoItem = {
  src: string
  alt: string
  category: Category
  location?: string
  year?: string
}

const categories: Category[] = ["Architecture", "Urbanscape", "Landscape", "Nature"]

// Replace these with your own images (local imports or URLs)
const photos: PhotoItem[] = [
  // Architecture
  {
    src: "https://images.unsplash.com/photo-1529421306624-4f9d1bda7b4b?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern building geometry",
    category: "Architecture",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80",
    alt: "City architecture",
    category: "Architecture",
    location: "Mysuru",
    year: "2024",
  },

  // Urbanscape
  {
    src: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1600&q=80",
    alt: "Night street lights",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1600&q=80",
    alt: "Urban alley",
    category: "Urbanscape",
    location: "Chennai",
    year: "2024",
  },

  // Landscape
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
    alt: "Wide mountain landscape",
    category: "Landscape",
    location: "Western Ghats",
    year: "2025",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    alt: "Forest horizon",
    category: "Landscape",
    location: "Coorg",
    year: "2024",
  },

  // Nature
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    alt: "Green leaves in soft light",
    category: "Nature",
    location: "Nandi Hills",
    year: "2025",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    alt: "Nature scene",
    category: "Nature",
    location: "Ooty",
    year: "2024",
  },
]

export default function PhotoGallery() {
  const [active, setActive] = useState<Category>("Architecture")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filtered = useMemo(
    () => photos.filter((p) => p.category === active),
    [active]
  )

  const openPhoto = (idx: number) => setOpenIndex(idx)
  const closePhoto = () => setOpenIndex(null)

  const goPrev = () => {
    if (openIndex === null) return
    setOpenIndex((openIndex - 1 + filtered.length) % filtered.length)
  }

  const goNext = () => {
    if (openIndex === null) return
    setOpenIndex((openIndex + 1) % filtered.length)
  }

  return (
    <section id="gallery" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Photo Gallery
          </h2>
          <p className="mt-4 max-w-2xl text-white/60">
            A curated selection of still frames — carefully composed, minimal,
            and emotionally honest.
          </p>
        </div>

        {/* category pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => {
            const isActive = c === active
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={[
                  "rounded-2xl px-4 py-2 text-sm font-semibold transition",
                  "ring-1 ring-white/10 backdrop-blur-xl",
                  isActive
                    ? "bg-white/10 text-white ring-white/20"
                    : "bg-black/20 text-white/70 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                {c}
              </button>
            )
          })}
        </div>

        {/* grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((img, idx) => (
            <button
              key={img.src + idx}
              onClick={() => openPhoto(idx)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_0_40px_rgba(0,0,0,0.35)] transition hover:border-white/20"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
              />

              {/* bottom glass caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 text-left">
                <p className="text-sm font-semibold text-white/90">{img.alt}</p>
                <p className="mt-1 text-xs text-white/60">
                  {img.location ? img.location : "—"}{" "}
                  <span className="mx-1 text-white/30">•</span>
                  {img.year ? img.year : "—"}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* lightbox */}
      {openIndex !== null && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
            onClick={closePhoto}
          />

          <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
            <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl">
              <button
                onClick={closePhoto}
                className="absolute right-4 top-4 rounded-xl p-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/5"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-2xl p-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/5"
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-2xl p-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/5"
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <img
                src={filtered[openIndex].src}
                alt={filtered[openIndex].alt}
                className="max-h-[80vh] w-full object-contain"
              />

              <div className="border-t border-white/10 px-6 py-4">
                <p className="text-sm font-semibold text-white/90">
                  {filtered[openIndex].alt}
                </p>
                <p className="mt-1 text-xs text-white/60">
                  {filtered[openIndex].location ?? "—"}{" "}
                  <span className="mx-1 text-white/30">•</span>
                  {filtered[openIndex].year ?? "—"}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
