"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "RecoverNet",
    description: "A simple lost and found app",
    image: "/images/projects/recoverynet.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/GulshanJha00/RecoveryNet",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Netflix Clone",
    description: "Netflix clone app",
    image: "/images/projects/netflix.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/GulshanJha00/Netflix",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Pinterest Fullstack Clone",
    description: "Pinterest clone app",
    image: "/images/projects/pinterest.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/GulshanJha00/Pinterest-Fullstack-Clone",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "NIEVED (App for Notes)",
    description: "A platform for note sharing",
    image: "/images/projects/nieved.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/GulshanJha00/Ved",
    previewUrl: "https://nieved.vercel.app",
  },
  {
    id: 5,
    title: "Sahitya",
    description: "A platform for music course",
    image: "/images/projects/sahitya.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/GulshanJha00/Sahitya",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "ByteScan",
    description: "Link to qr Generator",
    image: "/images/projects/sahitya.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/GulshanJha00/ByteScan",
    previewUrl: "https://bytescan.vercel.app/",
  },
  {
    id: 7,
    title: "CoinCraft",
    description: "Detailed Crypto Analysis Website",
    image: "/images/projects/sahitya.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/GulshanJha00/CoinCraft",
    previewUrl: "https://cryptocoinverse.vercel.app/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === "Full Stack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
