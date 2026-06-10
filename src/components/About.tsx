export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="text-center space-y-8">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I'm a student of computer science and music.
              I navigate the intersections of technology, art, and nature with a keen eye for detail and structure. 
              My work spans machine learning, computer vision, and AI-driven applications—building solutions that are both functional and forward-thinking.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              I'm also deeply interested in robotics and automation, with an intent to further study systems design and development.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Beyond technology, I study Carnatic music and literature, appreciating the precision and depth they demand. As a connoisseur of art and an 
              observer of nature, I find parallels between structured creativity and organic evolution.
              I approach problems with an analytical mindset, balancing technical rigor with an appreciation for aesthetics and form.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Python', 'Node.js', 'Machine Learning', 'Computer Vision'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




