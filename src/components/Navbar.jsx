import React, { useEffect, useState } from "react";
import Logo from "../assets/logo1.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import ResumePDF from "../assets/resume.pdf";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const github = "https://github.com/SirDest";
  const linkedIn = "https://linkedin.com/in/destined-akinro";
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const gitHubLink = () => {
    window.open(github, "_blank");
  };
  const ResumeLink = () => {
    window.open(ResumePDF, "_blank");
  };
  const linkedInLink = () => {
    window.open(linkedIn, "_blank");
  };
  const changeColor = () => {
    window.scrollY > 1 ? setColor(true) : setColor(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  return (
    <div
      style={{ backgroundColor: color ? "black" : "transperent" }}
      className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300"
    >
      <Link to="home" className="cursor-pointer">
        <img src={Logo} alt="LogoImage" style={{ width: "150px" }} />
      </Link>
      {/* menu */}
      <ul className="md:flex hidden ">
        <li className="hover:text-pink-600 duration-1000">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-pink-600 duration-1000">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-pink-600 duration-1000">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-pink-600 duration-1000">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-pink-600 duration-1000">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <div
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex-col flex justify-center items-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl hover:text-pink-600 duration-1000">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-pink-600 duration-1000">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-pink-600 duration-1000">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>

          <li className="py-6 text-4xl hover:text-pink-600 duration-1000">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-pink-600 duration-1000">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Menu */}
      <div className=" hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <Link
              className="flex justify-between items-center text-gray-300 w-full"
              to={linkedInLink}
            >
              LinkedIn <FaLinkedin size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <Link
              className="flex justify-between items-center text-gray-300 w-full"
              to={gitHubLink}
            >
              GitHub <FaGithub size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2e0]">
            <a
              className="flex justify-between items-center text-gray-300 w-full"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li
            onClick={ResumeLink}
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]"
          >
            <a
              className="flex justify-between items-center text-gray-300 w-full"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
