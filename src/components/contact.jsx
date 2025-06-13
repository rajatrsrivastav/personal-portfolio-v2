import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ArrowRightIcon } from "lucide-react";
import Footer from "./footer"
import { SparklesCore } from "./ui/sparkles";

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
    <div className="min-h-screen z-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-20 px-4 pb-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 italic">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm available for full-time roles & freelance projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg hidden sm:block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83919955306!2d77.06889967837038!3d28.527554409660315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35a5aaaaaab%3A0xe6f38e11e7a35e5d!2sDelhi%20NCR!5e0!3m2!1sen!2sin!4v1718007834567!5m2!1sen!2"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="border-none"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm resize-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm resize-none"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject (Optional)"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm resize-none"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm resize-none"
                required
              ></textarea>

               <button
                  onClick={handleSubmit}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                SEND MESSAGE
                <ArrowRightIcon/>
              </button>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
