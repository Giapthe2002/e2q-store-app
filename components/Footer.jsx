import React from "react";
import { FaRegCopyright, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return <div className="mt-5 py-[30px] px-2.5 flex flex-col items-center justify-center gap-2.5">
    <div className="flex flex-row items-center gap-1 text-gray-700 font-light"> 
      <FaRegCopyright /> 
      <p>2025 E2QStore All rights reserverd.</p>
    </div>
    <div className="flex gap-2.5 ">
      <a href="https://www.instagram.com/">
        <span className="text-2xl"><FaInstagram /></span>
      </a>
      <a href="https://www.facebook.com/">
        <span className="text-2xl text-blue-800"><FaFacebook /></span>
      </a>
    </div>
  </div>;
};

export default Footer;
