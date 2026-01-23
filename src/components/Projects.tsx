import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'AI-Powered OCR Application',
    description: 'A comprehensive OCR solution using Tesseract and machine learning models for accurate text extraction from various document types.',
    technologies: ['Python', 'Tesseract', 'OpenCV', 'TensorFlow'],
    github: 'https://github.com/yourusername/ocr-app',
    demo: 'https://ocr-demo.vercel.app',
    image: '/api/placeholder/400/250'
  },
  {
    title: 'Real-time Stock Analysis Dashboard',
    description: 'Interactive dashboard for stock market analysis with real-time data visualization and predictive modeling.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
    github: 'https://github.com/yourusername/stock-dashboard',
    demo: 'https://stock-dashboard.vercel.app',
    image: '/api/placeholder/400/250'
  },
  {
    title: 'Sanskrit Text Processing Tool',
    description: 'NLP toolkit for processing and analyzing Sanskrit texts with morphological analysis and translation features.',
    technologies: ['Python', 'NLTK', 'SpaCy', 'React'],
    github: 'https://github.com/yourusername/sanskrit-nlp',
    demo: 'https://sanskrit-nlp.vercel.app',
    image: '/api/placeholder/400/250'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
              <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-sm hover:text-gray-300">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm hover:text-gray-300">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}