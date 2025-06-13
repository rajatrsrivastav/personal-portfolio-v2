import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-10 text-white mt-20 pb-0">
      <div className="max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-purple-400">Rajat</span> Srivastav
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              I thrive on crafting dynamic web applications, and delivering
              seamless user experiences.
            </p>
            <div className="flex items-center gap-4 text-xl text-gray-400">
              <a
                href="https://www.linkedin.com/in/rajatrsrivastav/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/rajatrsrivastav"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/rajatrsrivastav"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/rajatrsrivastav"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Navigation
            </h3>
            <ul className="space-y-2 text-gray-400">
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
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Services
            </h3>
            <ul className="space-y-2 text-gray-400">
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

        <div className="text-gray-500 ">
          <p>&copy; 2025 Rajat Srivastav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
