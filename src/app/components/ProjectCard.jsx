import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <h1 className="text-center">view Project</h1>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
