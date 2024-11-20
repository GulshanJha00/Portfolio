import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-[#ffffff] text-white py-8 bg-[#18191E]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <div className="flex items-center gap-4">
          <Image src="/images/original.png" width={60} height={60} alt="Logo" />
          <span className="text-sm text-gray-400">
            Crafted with precision by Gulshan Kumar
          </span>
        </div>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
