import logo from "../assets/shad-logo2.webp";
import { FaLinkedin, FaGithub, FaMailBulk, FaInstagram } from "react-icons/fa";
import React from "react";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between">
   
      <div className="flex flex-shrink-0 items-center">
        <img height={80} width={80} className="mx-2 "  src={logo}  alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-5 text-2xl">
        <a href="https://www.linkedin.com/in/shadullamohd/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ShadullaMohd">
          <FaGithub />
        </a>
        <a href="mailto:shadullamohammad04@gmail.com">
          <FaMailBulk />
        </a>
        <a href="https://www.instagram.com/its_official_shad/">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
