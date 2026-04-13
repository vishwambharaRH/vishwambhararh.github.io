import { Mail, Github, Linkedin, Instagram } from 'lucide-react'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS config')
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey
      })
      
      setStatus('sent')
      setTimeout(() => {
        formRef.current?.reset()
        setStatus('idle')
      }, 2000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

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
            <Mail className="w-6 h-6" /><span>Email</span>
          </a>
          <a href="https://github.com/vishwambharaRH" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Github className="w-6 h-6" /><span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/vishwambharah" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Linkedin className="w-6 h-6" /><span>LinkedIn</span>
          </a>
          <a href="https://instagram.com/supernallyearthy" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Instagram className="w-6 h-6" /><span>Instagram</span>
          </a>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
          <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                disabled={status === 'sending'}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 disabled:opacity-50"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                disabled={status === 'sending'}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 disabled:opacity-50"
              />
            </div>
            <div className="mb-6">
              <textarea
                rows={4}
                name="message"
                placeholder="Your Message"
                required
                disabled={status === 'sending'}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 resize-none disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-3 bg-white text-black rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'idle' && 'Send Message'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && '✓ Sent!'}
              {status === 'error' && 'Error - Try again'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 