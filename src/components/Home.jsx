import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import ResumePDF from "../assets/resume.pdf";

const Home = () => {
  const ResumeLink = () => {
    window.open(ResumePDF, "_blank");
  };
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex px-8 flex-col justify-center h-full">
        <p className="text-pink-600 ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Akinro Destined
        </h1>
        <h2 className="text-3xl font-bold sm:text-6xl text-[#8892b0]">
          I'm a Front-End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Welcome to my corner of the web! I'm Destined Akinro, a passionate and
          dedicated web developer with a burning desire to create stunning,
          functional, and user-friendly websites.
          <button
            onClick={ResumeLink}
            className="text-white border-2 group py-3 px-6 my-2 w-fit flex items-center hover:bg-pink-600 hover:border-pink-600"
          >
            Resume
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Home;
