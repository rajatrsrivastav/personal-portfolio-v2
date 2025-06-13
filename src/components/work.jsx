import React from 'react'
import {ExternalLink} from 'lucide-react'


const Work = () => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-6xl">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6 lg:text-center">My Work</h1>
            <p className="text-xl text-gray-300">
              A collection of projects that showcase my expertise in full-stack
              development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "Modern e-commerce solution with React, Node.js, and Stripe integration",
                image: "/api/placeholder/400/250",
                tags: ["React", "Node.js", "PostgreSQL"],
                link: "#",
              },
              {
                title: "Task Management App",
                description:
                  "Collaborative task management with real-time updates",
                image: "/api/placeholder/400/250",
                tags: ["Next.js", "Socket.io", "MongoDB"],
                link: "#",
              },
              {
                title: "Analytics Dashboard",
                description:
                  "Data visualization dashboard for business insights",
                image: "/api/placeholder/400/250",
                tags: ["React", "D3.js", "Python"],
                link: "#",
              },
              {
                title: "Social Media Platform",
                description:
                  "Full-featured social platform with real-time messaging",
                image: "/api/placeholder/400/250",
                tags: ["React Native", "Express", "Redis"],
                link: "#",
              },
              {
                title: "Learning Management System",
                description:
                  "Educational platform with video streaming and assessments",
                image: "/api/placeholder/400/250",
                tags: ["Next.js", "AWS", "PostgreSQL"],
                link: "#",
              },
              {
                title: "Fintech Application",
                description:
                  "Secure financial application with payment processing",
                image: "/api/placeholder/400/250",
                tags: ["React", "Node.js", "Blockchain"],
                link: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Work