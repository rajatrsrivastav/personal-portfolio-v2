import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: "Snippix",
    description: "A platform for creating and sharing code snippets with a clean and intuitive design. Features syntax highlighting, multiple themes, and seamless sharing capabilities.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Highlight.js"],
    link: "#"
  },
  {
    id: 2,
    title: "Zenith Minds",
    description: "An educational platform connecting students and instructors for enhanced learning experiences. Built with modern tech stack for scalability and performance.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    techStack: ["Next.js", "React", "TypeScript", "MongoDB"],
    link: "#"
  },
  {
    id: 3,
    title: "Next Ventures",
    description: "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. Features clean design and modern user experience.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    techStack: ["Next.js", "React", "Tailwind CSS", "Motion.dev"],
    link: "#"
  },
  {
    id: 4,
    title: "Creative Studio",
    description: "A captivating portfolio showcasing innovative web development and UI/UX design work. Built to impress with blazing speed and compelling visuals.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    techStack: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    link: "#"
  }
];

const WorkSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const projectCards = sectionRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20">
      {/* Section Header */}
      <div className="flex items-center justify-center py-20">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-4">
            Featured Case Studies
          </p>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent mb-6">
            Curated <span className="italic text-purple-400">work</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            A collection of projects that showcase innovation, creativity, and technical excellence
          </p>
        </div>
      </div>

      {/* Projects Container */}
      <div ref={sectionRef} className="space-y-0">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
