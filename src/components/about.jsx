import React from "react";

const skills = [
  {
    name: "ReactJS",
    icon: "⚛️",
    color:
      "bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-cyan-500/10 border-blue-500/20 text-blue-300 backdrop-blur-sm",
  },
  {
    name: "NextJS",
    icon: "▲",
    color:
      "bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/10 border-gray-500/20 text-gray-300 backdrop-blur-sm",
  },
  {
    name: "TypeScript",
    icon: "TS",
    color:
      "bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-indigo-600/10 border-blue-600/20 text-blue-400 backdrop-blur-sm",
  },
  {
    name: "Tailwind CSS",
    icon: "🌊",
    color:
      "bg-gradient-to-br from-cyan-500/10 via-teal-400/5 to-blue-500/10 border-cyan-500/20 text-cyan-300 backdrop-blur-sm",
  },
  {
    name: "Motion",
    icon: "M",
    color:
      "bg-gradient-to-br from-purple-500/10 via-violet-400/5 to-purple-600/10 border-purple-500/20 text-purple-300 backdrop-blur-sm",
  },
  {
    name: "Sanity",
    icon: "S",
    color:
      "bg-gradient-to-br from-red-500/10 via-rose-400/5 to-red-600/10 border-red-500/20 text-red-400 backdrop-blur-sm",
  },
  {
    name: "Contentful",
    icon: "📝",
    color:
      "bg-gradient-to-br from-blue-400/10 via-sky-300/5 to-blue-500/10 border-blue-400/20 text-blue-300 backdrop-blur-sm",
  },
  {
    name: "NodeJS",
    icon: "⬢",
    color:
      "bg-gradient-to-br from-green-500/10 via-emerald-400/5 to-green-600/10 border-green-500/20 text-green-400 backdrop-blur-sm",
  },
  {
    name: "ExpressJS",
    icon: "E",
    color:
      "bg-gradient-to-br from-gray-600/10 via-slate-500/5 to-gray-700/10 border-gray-600/20 text-gray-300 backdrop-blur-sm",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    color:
      "bg-gradient-to-br from-blue-700/10 via-blue-600/5 to-indigo-700/10 border-blue-700/20 text-blue-400 backdrop-blur-sm",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    color:
      "bg-gradient-to-br from-green-600/10 via-green-500/5 to-emerald-600/10 border-green-600/20 text-green-400 backdrop-blur-sm",
  },
  {
    name: "Prisma",
    icon: "▲",
    color:
      "bg-gradient-to-br from-indigo-500/10 via-purple-400/5 to-indigo-600/10 border-indigo-500/20 text-indigo-300 backdrop-blur-sm",
  },
  {
    name: "Zustand",
    icon: "🐻",
    color:
      "bg-gradient-to-br from-orange-500/10 via-amber-400/5 to-orange-600/10 border-orange-500/20 text-orange-300 backdrop-blur-sm",
  },
  {
    name: "Zod",
    icon: "Z",
    color:
      "bg-gradient-to-br from-blue-500/10 via-sky-400/5 to-blue-600/10 border-blue-500/20 text-blue-300 backdrop-blur-sm",
  },
  {
    name: "pnpm",
    icon: "📦",
    color:
      "bg-gradient-to-br from-yellow-600/10 via-amber-500/5 to-yellow-700/10 border-yellow-600/20 text-yellow-400 backdrop-blur-sm",
  },
  {
    name: "Bun",
    icon: "🥟",
    color:
      "bg-gradient-to-br from-yellow-500/10 via-yellow-400/5 to-amber-500/10 border-yellow-500/20 text-yellow-300 backdrop-blur-sm",
  },
  {
    name: "Git",
    icon: "🌿",
    color:
      "bg-gradient-to-br from-orange-600/10 via-red-500/5 to-orange-700/10 border-orange-600/20 text-orange-400 backdrop-blur-sm",
  },
  {
    name: "GitHub",
    icon: "🐙",
    color:
      "bg-gradient-to-br from-gray-700/10 via-slate-600/5 to-gray-800/10 border-gray-700/20 text-gray-300 backdrop-blur-sm",
  },
  {
    name: "Vercel",
    icon: "▲",
    color:
      "bg-gradient-to-br from-gray-800/10 via-slate-700/5 to-black/10 border-gray-800/20 text-gray-200 backdrop-blur-sm",
  },
  {
    name: "AWS",
    icon: "☁️",
    color:
      "bg-gradient-to-br from-orange-400/10 via-amber-300/5 to-orange-500/10 border-orange-400/20 text-orange-300 backdrop-blur-sm",
  },
  {
    name: "Docker",
    icon: "🐳",
    color:
      "bg-gradient-to-br from-blue-400/10 via-sky-300/5 to-blue-500/10 border-blue-400/20 text-blue-300 backdrop-blur-sm",
  },
  {
    name: "Expo",
    icon: "⚡",
    color:
      "bg-gradient-to-br from-gray-600/10 via-slate-500/5 to-gray-700/10 border-gray-600/20 text-gray-300 backdrop-blur-sm",
  },
  {
    name: "Clerk",
    icon: "🔐",
    color:
      "bg-gradient-to-br from-purple-600/10 via-violet-500/5 to-purple-700/10 border-purple-600/20 text-purple-300 backdrop-blur-sm",
  },
  {
    name: "Linux",
    icon: "🐧",
    color:
      "bg-gradient-to-br from-yellow-500/10 via-amber-400/5 to-yellow-600/10 border-yellow-500/20 text-yellow-300 backdrop-blur-sm",
  },
];

const About = () => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest mb-4 text-center sm:text-left">
          About Me
        </div>
        <p className="text-lg sm:text-xl md:text-xl text-gray-300 leading-relaxed mb-4 text-center sm:text-left">
          I'm a first-year Computer Science student with a deep interest in
          full-stack web development. I enjoy turning complex problems into
          user-friendly web interfaces, and I'm constantly exploring new tech —
          whether it's enhancing interactivity with Framer Motion or optimizing
          performance in Next.js apps.
        </p>
        <p className="text-lg sm:text-xl md:text-xl text-gray-300 leading-relaxed mb-4 text-center sm:text-left">
          I Specialize In
        </p>
        <br />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
          Skills &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 italic">
            Technologies
          </span>
        </h1>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
            {skills.slice(0, 6).map((skill, index) => (
              <div
                key={index}
                className={`${skill.color} px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg border backdrop-blur-sm flex items-center space-x-1 sm:space-x-2 hover:scale-105 transition-transform cursor-pointer`}
              >
                <span className="text-sm sm:text-base md:text-lg">{skill.icon}</span>
                <span className="font-medium text-xs sm:text-sm md:text-base">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
            {skills.slice(6, 12).map((skill, index) => (
              <div
                key={index}
                className={`${skill.color} px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg border backdrop-blur-sm flex items-center space-x-1 sm:space-x-2 hover:scale-105 transition-transform cursor-pointer`}
              >
                <span className="text-sm sm:text-base md:text-lg">{skill.icon}</span>
                <span className="font-medium text-xs sm:text-sm md:text-base">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
            {skills.slice(12, 19).map((skill, index) => (
              <div
                key={index}
                className={`${skill.color} px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg border backdrop-blur-sm flex items-center space-x-1 sm:space-x-2 hover:scale-105 transition-transform cursor-pointer`}
              >
                <span className="text-sm sm:text-base md:text-lg">{skill.icon}</span>
                <span className="font-medium text-xs sm:text-sm md:text-base">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {skills.slice(19).map((skill, index) => (
              <div
                key={index}
                className={`${skill.color} px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg border backdrop-blur-sm flex items-center space-x-1 sm:space-x-2 hover:scale-105 transition-transform cursor-pointer`}
              >
                <span className="text-sm sm:text-base md:text-lg">{skill.icon}</span>
                <span className="font-medium text-xs sm:text-sm md:text-base">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;