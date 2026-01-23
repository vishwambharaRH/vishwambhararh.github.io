import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"

const navItems = [
  { label: "Home", id: "hero", route: "/" },
  { label: "About", id: "about", route: "/" },
  { label: "Projects", id: "projects", route: "/" },
  { label: "Gallery", id: "gallery", route: "/gallery" }, // NEW
  { label: "Contact", id: "contact", route: "/" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const goTo = (route: string, id?: string) => {
    setIsOpen(false)

    // If route is /gallery just navigate
    if (!id) {
      navigate(route)
      return
    }

    // If we're already on that route, smooth scroll
    if (location.pathname === route) {
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: "smooth" })
      return
    }

    // Otherwise go home first, then scroll after render
    navigate(route)
    setTimeout(() => {
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: "smooth" })
    }, 50)
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="relative flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 shadow-[0_0_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-80"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-60 blur-xl"
          />

          {/* Brand */}
          <button
            onClick={() => goTo("/", "hero")}
            className="relative z-10 flex items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-white/5"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <span className="text-sm font-semibold tracking-tight text-white">V</span>
            </span>
            <span className="text-sm font-semibold tracking-tight text-white/90">
              Portfolio
            </span>
          </button>

          {/* Desktop menu */}
          <div className="relative z-10 hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => goTo(item.route, item.route === "/gallery" ? undefined : item.id)}
                className="rounded-xl px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="relative z-10 inline-flex items-center justify-center rounded-xl p-2 text-white/70 ring-1 ring-white/10 transition hover:bg-white/5 hover:text-white md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-x-0 top-[76px] z-50 mx-auto max-w-7xl px-4 sm:px-6 md:hidden">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl">
              <div className="p-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => goTo(item.route, item.route === "/gallery" ? undefined : item.id)}
                    className="w-full rounded-xl px-4 py-3 text-left text-base font-semibold text-white/85 transition hover:bg-white/5"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
