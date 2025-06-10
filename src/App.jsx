import React, { useState, useEffect } from "react";
import { Mail, ArrowRight } from "lucide-react";
import Navbar from "./components/navbar";

const App = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 150; i++) {
        starArray.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 4,
          moveX: (Math.random() - 0.5) * 100,
          moveY: (Math.random() - 0.5) * 100,
          size: Math.random() * 2 + 1,
        });
      }
      setStars(starArray);
    };

    generateStars();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white overflow-hidden relative">
      <div className="relative min-h-screen">
        <div className="fixed inset-0 pointer-events-none z-10">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
                transform: `translate(${star.moveX}px, ${star.moveY}px)`,
                animation: `starMove ${star.duration}s ease-in-out infinite ${star.delay}s, pulse 2s ease-in-out infinite ${star.delay}s`,
              }}
            />
          ))}
        </div>

        <main className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <Navbar />
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
        </main>

        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[120vw] h-[60vw] max-w-[1200px] max-h-[600px] bg-black rounded-t-full border-t border-white/20 z-5" />

        <div
          className="fixed bottom-0 right-0 w-96 h-96 md:w-[60vw] md:h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 -translate-y-1/4 translate-x-1/4 animate-pulse z-0"
          style={{
            animation: "float 6s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
};

export default App;
