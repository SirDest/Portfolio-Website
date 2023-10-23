import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Bootstrap from "../assets/bootstrap.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Next from "../assets/nextjs.png";

const Skills = () => {
  const webSkills = [
    {
      name: "HTML",
      image: HTML,
    },
    {
      name: "CSS",
      image: CSS,
    },
    {
      name: "Javascript",
      image: Javascript,
    },
    {
      name: "React.Js",
      image: ReactImg,
    },
    {
      name: "Github",
      image: Github,
    },
    {
      name: "Tailwind",
      image: Tailwind,
    },
    {
      name: "Bootstrap",
      image: Bootstrap,
    },
    {
      name: "Next.Js",
      image: Next,
    },
  ];
  return (
    <div name="skills" className="w-full h-screen text-gray-300 bg-[#0a192f]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline font-bold border-b-4 border-b-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies i have worked with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/*1*/}

          {webSkills.map(({ name, image }) => (
            <div
              key={name}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={image} alt="HTML icon" />
              <p className="my-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
