import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission (Email.js, etc.)
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-20 px-4 pb-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Create Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 italic">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss
              how we can bring your ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.657990913193!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c33ff6c3%3A0x7f309e4d2c749a8a!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1683543917987!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="border-none"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject (Optional)"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>

              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition flex items-center gap-2"
              >
                SEND MESSAGE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
          </div>
<footer className="bg-black text-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Bio */}
        <div>
          <div className="text-3xl font-bold mb-4">RS</div>
          <p className="text-gray-400 mb-4">
            I'm Rajat – a full-stack developer, freelancer & problem solver. Thanks
            for checking out my site!
          </p>
          <p className="text-gray-500 text-sm">© 2025 Rajat Srivastav</p>
          <div className="flex items-center gap-4 mt-4 text-xl text-gray-400">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-white" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-white" />
            </a>
          </div>
        </div>

        {/* General Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">General</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Specifics */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Specifics</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Guest Book</a></li>
            <li><a href="#">Bucket List</a></li>
            <li className="opacity-60"><a href="#">Attribution</a></li>
            <li className="opacity-60"><a href="#">Toolbox</a></li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="text-lg font-semibold mb-3">More</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Contact</a></li>
            <li><a href="#">Links</a></li>
            <li><a href="#">RSS</a></li>
          </ul>
        </div>
      </div>
    </footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
