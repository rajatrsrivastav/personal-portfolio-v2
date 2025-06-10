import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center bg-transparent z-50">
      <a href="/" className="w-17 h-17">
        <img src="./rs_white_text1.png"></img>
      </a>
      
      <nav className="hidden md:flex items-center bg-white/10 backdrop-blur-xl rounded-full p-2">
        <a href="#" className="bg-white/90 text-black px-6 py-3 rounded-full text-sm transition-all duration-300">
          Home
        </a>
        <a href="#" className="text-white/70 hover:text-white hover:bg-white/20 px-6 py-3 rounded-full text-sm transition-all duration-300">
          About
        </a>
        <a href="#" className="text-white/70 hover:text-white hover:bg-white/20 px-6 py-3 rounded-full text-sm transition-all duration-300">
          Work
        </a>
        <a href="#" className="text-white/70 hover:text-white hover:bg-white/20 px-6 py-3 rounded-full text-sm transition-all duration-300">
          Blog
        </a>
        <a href="#" className="text-white/70 hover:text-white hover:bg-white/20 px-6 py-3 rounded-full text-sm transition-all duration-300">
          More
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <a href="#" className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300">
          Book a Call
        </a>
      </div>
    </div>
  );
};

export default Navbar