import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Vishwambhara R Hebbalalu
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          I am Vishwambhara R Hebbalalu, a third-year Computer Science student at PES University, with a strong interest in machine learning, linguistics, and artificial intelligence.
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
          I've worked on small-scale proof-of-concept projects in these domains, and I'm eager to explore how intelligent perception and decision-making can be applied to real-life scenarios that demand the same.
          Beyond tech, I'm a trained Carnatic classical musician (17+ years), and I write short stories and blog posts. I believe this blend of structured rigor and creative thinking allows me to approach technical challenges with both discipline and fresh perspective.

        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  )
}