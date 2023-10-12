import React from "react";

const WorkContainer = ({ works }) => {
  const { name, demo, code, image } = works;
  const demoLink = () => {
    window.open(demo, "_blank");
  };

  const codeLink = () => {
    window.open(code, "_blank");
  };
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500 ease-in-out"
    >
      {/*Hover Effect */}
      <div className="opacity-0 group-hover:opacity-100 duration-500 ease-in-out p-3 text-center">
        <p className=" text-2xl font-bold text-center text-white tracking-wider">
          {name}
        </p>
        <div className="pt-8 text-center">
          <a
            className="pt8
                text-center"
            href="/"
          >
            <button
              onClick={demoLink}
              className="text-center rounded-lg bg-white m-2 px-4 py3 text-gray-700 font-bold text-lg hover:scale-105 ease-in-out duration-300"
            >
              Demo
            </button>
          </a>
          <a href="/">
            <button
              onClick={codeLink}
              className="text-center rounded-lg bg-white m-2 px-4 py3 text-gray-700 font-bold text-lg hover:scale-105 ease-in-out duration-300"
            >
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkContainer;
