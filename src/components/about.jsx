import React from 'react'


const about = () => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6 lg:text-center">About Me</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in creating
              seamless digital experiences. I help founders and businesses
              transform their ideas into powerful, user-centric applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
              <div className="space-y-4">
                {[
                  {
                    category: "Frontend",
                    skills: "React, Next.js, TypeScript, Tailwind CSS",
                  },
                  {
                    category: "Backend",
                    skills: "Node.js, Express, Python, PostgreSQL",
                  },
                  {
                    category: "Cloud & DevOps",
                    skills: "AWS, Docker, Kubernetes, CI/CD",
                  },
                  { category: "Tools", skills: "Git, Figma, Postman, VS Code" },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-400 mb-2">
                      {item.category}
                    </h3>
                    <p className="text-gray-300">{item.skills}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Experience</h2>
              <div className="space-y-6">
                {[
                  {
                    role: "Senior Full Stack Developer",
                    company: "Tech Startup",
                    period: "2022 - Present",
                    description:
                      "Led development of core platform features, improving user engagement by 40%",
                  },
                  {
                    role: "Frontend Developer",
                    company: "Digital Agency",
                    period: "2020 - 2022",
                    description:
                      "Built responsive web applications for 20+ clients across various industries",
                  },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-purple-500 pl-4"
                  >
                    <h3 className="font-semibold text-lg">{job.role}</h3>
                    <p className="text-purple-400">
                      {job.company} • {job.period}
                    </p>
                    <p className="text-gray-300 mt-2">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default about