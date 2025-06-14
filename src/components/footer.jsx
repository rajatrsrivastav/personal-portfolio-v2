import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-10 text-white mt-12 sm:mt-16 md:mt-20 pb-6 sm:pb-8 px-4 sm:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8">
          <div className="sm:col-span-2 text-center sm:text-left">
            <div className="text-xl sm:text-2xl font-bold mb-4 sm:mb-4">
              <span className="text-purple-400">Rajat</span> Srivastav
            </div>
            <p className="text-gray-400 mb-6 sm:mb-4 max-w-md mx-auto sm:mx-0 text-sm sm:text-base leading-relaxed">
              I thrive on crafting dynamic web applications, and delivering
              seamless user experiences.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-4 text-xl sm:text-xl text-gray-400">
              <a
                href="https://www.linkedin.com/in/rajatrsrivastav/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition-colors p-2"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/rajatrsrivastav"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition-colors p-2"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/rajatrsrivastav"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition-colors p-2"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/rajatrsrivastav"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition-colors p-2"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div className="text-center sm:text-left hidden sm:block">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-4 text-purple-400">
              Navigation
            </h3>
            <ul className="space-y-2 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left hidden sm:block">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-4 text-purple-400">
              Services
            </h3>
            <ul className="space-y-2 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Frontend Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Backend Development
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-gray-500 text-center sm:text-left text-xs sm:text-sm">
          <p>&copy; 2025 Rajat Srivastav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;