import { ExternalLink, Github } from 'lucide-react'

type Project = {
  title: string
  description: string
  technologies: string[]
  github?: string
  codeberg?: string
  goThere?: string // previously "demo"
}

function CodebergIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M12 3C7.029 3 3 7.029 3 12s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6.8 15.5 10.4 9.2 12 12l1.6-2.4 3.6 5.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

const projects: Project[] = [
  {
    title: 'OCR-LLM Application',
    description: 'A comprehensive OCR and postprocessing workflow for accurate text extraction from PDFs.',
    technologies: ['Python', 'Tesseract', 'Google Cloud', 'OpenRouter'],
    github: 'https://github.com/vishwambharaRH/OCR-LLM-Old-Version',
  },
  {
    title: 'Kalidasa',
    description: "A website for the reading and enjoyment of Mahakavi Kalidasa's works.",
    technologies: ['React', 'Vite', 'Samskritam', "Kalidasa's poetry"],
    goThere: 'https://kalidasa.vercel.app',
  },
  {
    title: 'Tapper-App',
    description: 'Tap away!',
    technologies: ['Python', 'NLTK', 'SpaCy', 'React'],
    github: 'https://github.com/vishwambharaRH/Tapper-App',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website built with React and Vite, featuring smooth animations and interactive components.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/vishwambharaRH/vishwambhararh.github.io',
    goThere: 'https://vishwambhararh.github.io',
  },
  {
    title: 'Blogger-Word-Counter',
    description: 'Counts words in the Blogger editor window.',
    technologies: ['JavaScript'],
    github: 'https://github.com/vishwambharaRH/Blogger-Word-Counter',
  },
  {
    title: 'Smart Agriculture System',
    description: 'An IoT-based system for monitoring and optimizing agricultural practices using sensor data.',
    technologies: ['Python', 'Arduino', 'IoT'],
    codeberg: 'https://codeberg.org/vishwambharaRH/Smart-Agricultural-System',
  },
]

// Duplicate projects for seamless infinite scroll
const duplicatedProjects = [...projects, ...projects]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>

        {/* marquee-fade uses mask-image (defined in index.css) */}
        <div className="relative overflow-hidden pause-marquee marquee-fade">
          {/* Track */}
          <div className="flex w-max animate-marquee will-change-transform">
            {duplicatedProjects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 mx-4 last:mr-28"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors h-full">
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>

                      {/* Compact repo icons on the top right */}
                      <div className="flex items-center gap-2 shrink-0">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="opacity-80 hover:opacity-100 transition-opacity"
                            aria-label="GitHub repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {project.codeberg && (
                          <a
                            href={project.codeberg}
                            target="_blank"
                            rel="noreferrer"
                            className="opacity-80 hover:opacity-100 transition-opacity"
                            aria-label="Codeberg repository"
                          >
                            <CodebergIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/10 border border-white/10 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Glassy "Go there" pill CTA */}
                    {project.goThere && (
                      <div className="mt-auto pt-4 border-t border-white/10">
                        <a
                          href={project.goThere}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            relative group inline-flex items-center gap-2
                            rounded-full px-4 py-2 text-sm
                            bg-white/10 border border-white/15
                            backdrop-blur-md
                            shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]
                            transition-all duration-200
                            hover:bg-white/14 hover:border-white/25 hover:-translate-y-[1px]
                            active:translate-y-0
                          "
                        >
                          <span
                            className="
                              pointer-events-none absolute inset-0 rounded-full
                              bg-gradient-to-r from-white/0 via-white/10 to-white/0
                              opacity-0 group-hover:opacity-100
                              transition-opacity duration-300
                            "
                          />
                          <ExternalLink className="w-4 h-4 relative z-10" />
                          <span className="relative z-10">Go there</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
