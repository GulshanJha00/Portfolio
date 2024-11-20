import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        
       
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <Link href={gitUrl}>
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        </Link>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
