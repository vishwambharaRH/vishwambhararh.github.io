import { Mail, Github, Linkedin, Instagram } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-12">
          I'm always interested in new opportunities and collaborations.
          Feel free to reach out if you'd like to work together or just say hello!
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <a href="mailto:vishwam.but.developer@gmail.com" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Mail className="w-6 h-6" />
            <span>Email</span>
          </a>
          <a href="https://github.com/vishwambharaRH" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/vishwambharah" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
          <a href="https://instagram.com/supernallyearthy" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Instagram className="w-6 h-6" />
            <span>Instagram</span>
          </a>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40"
              />
            </div>
            <div className="mb-6">
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}