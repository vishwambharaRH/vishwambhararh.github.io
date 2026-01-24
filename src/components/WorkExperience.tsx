import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Consultancy Intern',
    company: 'Sarasvatam',
    location: 'Bengaluru',
    period: 'June 2025 - August 2025',
    description: 'Engaged in a research-driven internship in computational linguistics with a focus on classical Indic languages. Contributed to the design and implementation of methodologies for text digitization and interlingual transformation. The work emphasized linguistic accuracy, script-level processing, and the preservation of philological structure.',
    technologies: ['Python', 'Tesseract', 'Google Cloud', 'OpenRouter', 'NLP']
  },
  {
    title: 'Web Developer',
    company: 'GCube - PESU',
    location: 'Remote',
    period: 'April 2025 - onwards',
    description: 'Part of web development team for the PESU gaming club, GCube.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express']
  }
]

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400 mt-2 md:mt-0">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}