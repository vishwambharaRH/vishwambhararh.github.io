export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="text-center space-y-8">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I've worked on small-scale proof-of-concept projects in domains like linguistics, machine learning, web and app development, and so on. 
              I'm eager to explore how intelligent perception and decision-making can be applied to real-life scenarios that demand the same.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Beyond tech, I'm a trained Carnatic classical musician (17+ years), and I write short stories and blog posts. 
              I believe this blend of structured rigor and creative thinking allows me to approach technical challenges with both discipline and fresh perspective.
              I also love photography and capturing the beauty of the world around me.
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