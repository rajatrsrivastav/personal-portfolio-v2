import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home"
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact";

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
      <Navbar />
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
};

export default App;
