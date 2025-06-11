import React from 'react'

const skills = [
    { name: 'ReactJS', icon: '⚛️', color: 'bg-blue-500/20 border-blue-500/30 text-blue-300' },
    { name: 'NextJS', icon: '▲', color: 'bg-gray-500/20 border-gray-500/30 text-gray-300' },
    { name: 'TypeScript', icon: 'TS', color: 'bg-blue-600/20 border-blue-600/30 text-blue-400' },
    { name: 'Tailwind CSS', icon: '🌊', color: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-300' },
    { name: 'Motion', icon: 'M', color: 'bg-purple-500/20 border-purple-500/30 text-purple-300' },
    { name: 'Sanity', icon: 'S', color: 'bg-red-500/20 border-red-500/30 text-red-400' },
    { name: 'Contentful', icon: '📝', color: 'bg-blue-400/20 border-blue-400/30 text-blue-300' },
    { name: 'NodeJS', icon: '⬢', color: 'bg-green-500/20 border-green-500/30 text-green-400' },
    { name: 'ExpressJS', icon: 'E', color: 'bg-gray-600/20 border-gray-600/30 text-gray-300' },
    { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-700/20 border-blue-700/30 text-blue-400' },
    { name: 'MongoDB', icon: '🍃', color: 'bg-green-600/20 border-green-600/30 text-green-400' },
    { name: 'Prisma', icon: '▲', color: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300' },
    { name: 'Zustand', icon: '🐻', color: 'bg-orange-500/20 border-orange-500/30 text-orange-300' },
    { name: 'Zod', icon: 'Z', color: 'bg-blue-500/20 border-blue-500/30 text-blue-300' },
    { name: 'pnpm', icon: '📦', color: 'bg-yellow-600/20 border-yellow-600/30 text-yellow-400' },
    { name: 'Bun', icon: '🥟', color: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-300' },
    { name: 'Git', icon: '🌿', color: 'bg-orange-600/20 border-orange-600/30 text-orange-400' },
    { name: 'GitHub', icon: '🐙', color: 'bg-gray-700/20 border-gray-700/30 text-gray-300' },
    { name: 'Vercel', icon: '▲', color: 'bg-gray-800/20 border-gray-800/30 text-gray-200' },
    
    // Fourth row
    { name: 'AWS', icon: '☁️', color: 'bg-orange-400/20 border-orange-400/30 text-orange-300' },
    { name: 'Docker', icon: '🐳', color: 'bg-blue-400/20 border-blue-400/30 text-blue-300' },
    { name: 'Expo', icon: '⚡', color: 'bg-gray-600/20 border-gray-600/30 text-gray-300' },
    { name: 'Clerk', icon: '🔐', color: 'bg-purple-600/20 border-purple-600/30 text-purple-300' },
    { name: 'Linux', icon: '🐧', color: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-300' }
  ];

const about = () => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl">
          <div className="text-sm text-gray-400 uppercase tracking-widest mb-4">
          About Me
        </div>
        <p className="text-xl text-gray-300 leading-relaxed">
              I’m a first-year Computer Science student with a deep interest in full-stack web development.
              I enjoy turning complex problems into user-friendly web interfaces, and I’m constantly exploring new tech — whether it’s enhancing interactivity with Framer Motion or optimizing performance in Next.js apps.
            </p>
          <p className="text-xl text-gray-300 leading-relaxed">
               I Specialize In
            </p>
          <br />
        <h1 className="text-6xl md:text-7xl font-bold mb-16 text-center">
          Skills & {' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 italic">
            Technologies
          </span>
        </h1>
          
<div className="max-w-6xl mx-auto">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {skills.slice(0, 6).map((skill, index) => (
              <div
                key={index}
                className={`${skill.color} px-4 py-3 rounded-lg border backdrop-blur-sm flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer`}
              >
                <span className="text-lg">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {skills.slice(6, 12).map((skill, index) => (
              <div
                key={index}
                className={`${skill.color} px-4 py-3 rounded-lg border backdrop-blur-sm flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer`}
              >
                <span className="text-lg">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Third Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {skills.slice(12, 19).map((skill, index) => (
              <div
                key={index}
                className={`${skill.color} px-4 py-3 rounded-lg border backdrop-blur-sm flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer`}
              >
                <span className="text-lg">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Fourth Row */}
          <div className="flex flex-wrap justify-center gap-4">
            {skills.slice(19).map((skill, index) => (
              <div
                key={index}
                className={`${skill.color} px-4 py-3 rounded-lg border backdrop-blur-sm flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer`}
              >
                <span className="text-lg">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    )
}

export default about