"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Full stack Developer in Tripfox Travellers</li>
        <li>Tech Core Member of BYTE Club</li>
      </ul>
    ),
  },
  {
    title: "Projects",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <Link href={"https://github.com/GulshanJha00/RecoveryNet"}> <li>RecoverNet (a simple lost and found app)</li> </Link>
        <Link href={"https://github.com/GulshanJha00/Netflix"}><li>Netflix</li></Link>
        <Link href={"https://github.com/GulshanJha00/Pinterest-Fullstack-Clone"}> <li>Pinterest Clone</li> </Link>
        <Link href={"https://nieved.vercel.app"}><li>NIEVED (app for notes)</li></Link>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I&apos;m a 2nd-year B.Tech student at the National Institute of Engineering with a knack for web development and a budding passion for DevOps. My expertise lies in crafting full-stack applications using the MERN stack (MongoDB, Express, React, Node.js), with hands-on experience in Next.js and Node.js for server-side magic. <br/>

Right now, I&apos;m diving into GSAP to bring life to websites with smooth, eye-catching animations that enhance user experiences. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Projects{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
