import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import BackgroundBeamsWithCollision from "./ui/BackgroundBeamsWithCollision";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Home = () => {
  return (
    <BackgroundBeamsWithCollision className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
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
        <a href="https://peerbot-ai.vercel.app/" className="">
          <HoverBorderGradient
  containerClassName="rounded-full"
  as="button"
  className="flex items-center space-x-2 inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 shadow-lg shadow-blue-900"
>
  <span className="font-medium">New</span>
  <span className="opacity-70">PeerBot is live!</span>
  <ArrowRight className="w-4 h-4" />
</HoverBorderGradient>

        </a>
        <a
          href="mailto:hello@rajatsrivastav.site"
          className="text-white/60 hover:text-white flex items-center gap-2 transition-colors duration-300"
        >
          <Mail className="w-4 h-4" />
          hello@rajatsrivastav.site
        </a>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Home;
