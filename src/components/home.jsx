import React from 'react'
import {ArrowRight, Mail } from 'lucide-react'

const home = () => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-8 max-w-6xl">
          I turn real-world challenges
          <br />
          into seamless{" "}
          <span className="italic bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            full-stack web solutions
          </span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-lg md:text-xl text-white/80 mb-12">
          Hello, I'm Rajat Srivastav a Full Stack Developer
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          <div className="">
            <div
              className={`inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30`}
            >
              <span className="font-medium">New</span>
              <span className="opacity-70">BotBuddy is live!</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          <a
            href="mailto:hello@rajatsrivastav.site"
            className="text-white/60 hover:text-white flex items-center gap-2 transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            hello@rajatsrivastav.site
          </a>
        </div>
      </div>
  )
}

export default home