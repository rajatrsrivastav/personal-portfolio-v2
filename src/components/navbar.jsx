import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 p-3 sm:p-4 md:p-6 flex justify-between items-center bg-transparent z-50">
      <a href="/" className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15">
        <img src="./rs_white_text.png" className="w-full h-full object-contain" alt="Logo" />
      </a>

      <nav className="hidden md:flex items-center bg-white/10 backdrop-blur-xl rounded-full p-2">
        <a
          href="#"
          className="bg-white/90 text-black px-4 lg:px-6 py-2 lg:py-3 rounded-full text-xs lg:text-sm transition-all duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white/70 hover:text-white hover:bg-white/20 px-4 lg:px-6 py-2 lg:py-3 rounded-full text-xs lg:text-sm transition-all duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="text-white/70 hover:text-white hover:bg-white/20 px-4 lg:px-6 py-2 lg:py-3 rounded-full text-xs lg:text-sm transition-all duration-300"
        >
          Contact
        </a>
        <a
          href="#"
          className="text-white/70 hover:text-white hover:bg-white/20 px-4 lg:px-6 py-2 lg:py-3 rounded-full text-xs lg:text-sm transition-all duration-300"
        >
          More
        </a>
      </nav>

      <div className="flex items-center gap-2 sm:gap-4">
        <a
          href="#"
          className="bg-white/10 border border-white/20 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 rounded-full hover:bg-white/20 transition-all duration-300 text-xs sm:text-sm"
        >
          <span className="hidden sm:inline">Book a Call</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;