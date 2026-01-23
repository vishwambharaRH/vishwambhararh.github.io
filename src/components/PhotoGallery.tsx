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
    src: "/photos/architecture/architecture-photo1.webp",
    alt: "Narasimha killing Hiranyakaśipu",
    category: "Architecture",
    location: "Halebeedu",
    year: "2023",
  },
  {
    src: "/photos/architecture/architecture-photo2.webp",
    alt: "Modern building geometry",
    category: "Architecture",
    location: "",
    year: "2025",
  },
  {
    src: "/photos/architecture/architecture-photo3.webp",
    alt: "Modern building geometry",
    category: "Architecture",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "/photos/architecture/architecture-photo4.webp",
    alt: "Modern building geometry",
    category: "Architecture",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "/photos/architecture/architecture-photo5.webp",
    alt: "",
    category: "Architecture",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "/photos/architecture/architecture-photo6.webp",
    alt: "Brihadeeshwara",
    category: "Architecture",
    location: "",
    year: "2025",
  },
  {
    src: "/photos/architecture/architecture-photo7.webp",
    alt: "",
    category: "Architecture",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "/photos/architecture/architecture-photo8.webp",
    alt: "Like a fever dream.",
    category: "Architecture",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "/photos/architecture/architecture-photo9.webp",
    alt: "Brihadeeshwara",
    category: "Architecture",
    location: "Thanjavur",
    year: "2025",
  },
  {
    src: "/photos/architecture/architecture-photo10.webp",
    alt: "New Kashi Vishwanath Temple",
    category: "Architecture",
    location: "Varanasi",
    year: "2018",
  },
  {
    src: "/photos/architecture/architecture-photo11.webp",
    alt: "Le Eiffel",
    category: "Architecture",
    location: "Paris",
    year: "2019",
  },
  {
    src: "/photos/architecture/architecture-photo12.webp",
    alt: "Modern building geometry",
    category: "Architecture",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "/photos/architecture/architecture-photo13.webp",
    alt: "The gates that ruined the French populace",
    category: "Architecture",
    location: "Versailles",
    year: "2019",
  },
  {
    src: "/photos/architecture/architecture-photo14.webp",
    alt: "Held together by mortar and prayers to forgotten gods.",
    category: "Architecture",
    location: "Rome",
    year: "2019",
  },

  // Urbanscape
  {
    src: "/photos/urbanscape/urbanscape-photo1.webp",
    alt: "Evenings from my bus window",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2022",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo2.webp",
    alt: "Trippy lights",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2023",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo3.webp",
    alt: "Tall.",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2024",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo4.webp",
    alt: "Mellow yellow.",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo5.webp",
    alt: "Fiery orange sets",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2023",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo6.webp",
    alt: "Ocean of people.",
    category: "Urbanscape",
    location: "Prayagraj",
    year: "2025",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo7.webp",
    alt: "Possibly eepy bird.",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2024",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo8.webp",
    alt: "Afternoons couldn't possibly be this busy.",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo9.webp",
    alt: "Off go my glasses.",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo10.webp",
    alt: "Real drippy.",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo11.webp",
    alt: "Symmetry from up above.",
    category: "Urbanscape",
    location: "Paris",
    year: "2019",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo12.webp",
    alt: "The snaking river Seine.",
    category: "Urbanscape",
    location: "Paris",
    year: "2019",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo13.webp",
    alt: "Sodium lamps glowing bright",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo14.webp",
    alt: "A confused blur.",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo15.webp",
    alt: "Twilight sets in at double speed.",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo16.webp",
    alt: "Like a painting.",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo17.webp",
    alt: "Nightlife.",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2024",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo18.webp",
    alt: "Raindrops.",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2025",
  },
  {
    src: "/photos/urbanscape/urbanscape-photo19.webp",
    alt: "The Not-Real Lake",
    category: "Urbanscape",
    location: "Bengaluru",
    year: "2025",
  },

  // Landscape
  {
    src: "photos/landscape/landscape-photo1.webp",
    alt: "Lake in the evening light.",
    category: "Landscape",
    location: "Lalbagh, Bengaluru",
    year: "2024",
  },
  {
    src: "photos/landscape/landscape-photo2.webp",
    alt: "Sun playing hide and seek.",
    category: "Landscape",
    location: "IISc, Bengaluru",
    year: "2025",
  },
  {
    src: "photos/landscape/landscape-photo3.webp",
    alt: "Chaotic calm.",
    category: "Landscape",
    location: "Whirlpool in Sringeri.",
    year: "2022",
  },
  {
    src: "photos/landscape/landscape-photo4.webp",
    alt: "Misty mornings.",
    category: "Landscape",
    location: "Chikmagalur",
    year: "2020",
  },
  {
    src: "photos/landscape/landscape-photo5.webp",
    alt: "The hill of poets.",
    category: "Landscape",
    location: "Kavishaila, Western Ghats",
    year: "2022",
  },
  {
    src: "photos/landscape/landscape-photo6.webp",
    alt: "Lake under the mountains.",
    category: "Landscape",
    location: "Hirekolale, Western Ghats",
    year: "2020",
  },
  {
    src: "photos/landscape/landscape-photo7.webp",
    alt: "The tall peaks of the West.",
    category: "Landscape",
    location: "Chikmagalur, Western Ghats",
    year: "2020",
  },
  {
    src: "photos/landscape/landscape-photo8.webp",
    alt: "काश्यां हि काशते काशी",
    category: "Landscape",
    location: "Varanasi",
    year: "2018",
  },
  {
    src: "photos/landscape/landscape-photo9.webp",
    alt: "Wide mountain landscape",
    category: "Landscape",
    location: "Western Ghats",
    year: "2025",
  },
  {
    src: "photos/landscape/landscape-photo10.webp",
    alt: "Wide mountain landscape",
    category: "Landscape",
    location: "Western Ghats",
    year: "2025",
  },
  {
    src: "photos/landscape/landscape-photo11.webp",
    alt: "Wide mountain landscape",
    category: "Landscape",
    location: "Western Ghats",
    year: "2025",
  },
  {
    src: "photos/landscape/landscape-photo12.webp",
    alt: "Wide mountain landscape",
    category: "Landscape",
    location: "Western Ghats",
    year: "2025",
  },
  {
    src: "photos/landscape/landscape-photo13.webp",
    alt: "Wide mountain landscape",
    category: "Landscape",
    location: "Western Ghats",
    year: "2025",
  },
  {
    src: "photos/landscape/landscape-photo14.webp",
    alt: "Wide mountain landscape",
    category: "Landscape",
    location: "Western Ghats",
    year: "2025",
  },

  // Nature
  {
    src: "photos/nature/nature-photo1.webp",
    alt: "Green leaves in soft light",
    category: "Nature",
    location: "Nandi Hills",
    year: "2025",
  },
  {
    src: "photos/nature/nature-photo2.webp",
    alt: "Green leaves in soft light",
    category: "Nature",
    location: "Nandi Hills",
    year: "2025",
  },
  {
    src: "photos/nature/nature-photo3.webp",
    alt: "Green leaves in soft light",
    category: "Nature",
    location: "Nandi Hills",
    year: "2025",
  },
  {
    src: "photos/nature/nature-photo4.webp",
    alt: "Green leaves in soft light",
    category: "Nature",
    location: "Nandi Hills",
    year: "2025",
  },
  {
    src: "photos/nature/nature-photo5.webp",
    alt: "Green leaves in soft light",
    category: "Nature",
    location: "Nandi Hills",
    year: "2025",
  },
  {
    src: "photos/nature/nature-photo6.webp",
    alt: "Green leaves in soft light",
    category: "Nature",
    location: "Nandi Hills",
    year: "2025",
  },
  {
    src: "photos/nature/nature-photo7.webp",
    alt: "Green leaves in soft light",
    category: "Nature",
    location: "Nandi Hills",
    year: "2025",
  },
  {
    src: "photos/nature/nature-photo8.webp",
    alt: "Green leaves in soft light",
    category: "Nature",
    location: "Nandi Hills",
    year: "2025",
  },
  {
    src: "photos/nature/nature-photo9.webp",
    alt: "Green leaves in soft light",
    category: "Nature",
    location: "Nandi Hills",
    year: "2025",
  },
  {
    src: "photos/nature/nature-photo10.webp",
    alt: "Green leaves in soft light",
    category: "Nature",
    location: "Nandi Hills",
    year: "2025",
  },
  {
    src: "photos/nature/nature-photo11.webp",
    alt: "Green leaves in soft light",
    category: "Nature",
    location: "Nandi Hills",
    year: "2025",
  },
  {
    src: "photos/nature/nature-photo12.webp",
    alt: "Green leaves in soft light",
    category: "Nature",
    location: "Nandi Hills",
    year: "2025",
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
            Some Photos of Mine
          </h2>
          <p className="mt-4 max-w-2xl text-white/60">
            A selection of photos that I love. You can check some of these on my Instagram as well (@supernallyearthy).
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
