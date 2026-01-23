export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate full-stack developer with a keen interest in artificial intelligence and machine learning.
              With experience in modern web technologies and a background in data science, I love creating applications
              that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or diving into the latest research in AI and computer vision.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Python', 'Node.js', 'Machine Learning', 'Computer Vision'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}