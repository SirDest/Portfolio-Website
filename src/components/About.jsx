import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-b-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="text-4xl font-bold sm:text-right">
            <p>
              Hi, I'm Destined, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              While I may not have years of experience under my belt, what I
              lack in years, I more than make up for with my enthusiasm,
              creativity, and a relentless drive to learn and grow in this
              ever-evolving field. I approach every project with a blend of
              creativity and precision. I believe that a well-crafted website is
              not just a collection of code but a seamless fusion of design,
              functionality, and user experience. I'm constantly honoring my
              skills in front-end to ensure that I can bring your vision to life
              effectively. I'm proficient in a range of web development
              technologies, including HTML, CSS, JavaScript, and more. I also
              have experience working with popular frameworks like
              ReactJS.Whether it's crafting a responsive design, optimizing
              website performance, or solving complex coding challenges, I'm up
              for the task.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
