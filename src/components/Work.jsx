import React from "react";
import MovieImg from "../assets/projects/MovieWebsite.jpg";
import GalleryDnD from "../assets/projects/Imagedragndrop.jpg";
import WorkContainer from "./WorkContainer";
import TodoListAppImg from "../assets/projects/TodoApp.jpg";
import CalculatorImg from "../assets/projects/Calculator.jpg";

const Work = () => {
  const work = [
    {
      name: "Movie Web App",
      demo: "https://destinedhngmovietask.netlify.app/",
      code: "https://github.com/SirDest/hngTASKtWOMOVIE",
      image: MovieImg,
    },
    {
      name: "Gallery Image drag and drop",
      demo: "https://hng-gallery-web-app.vercel.app/",
      code: "https://github.com/SirDest/HNG-Gallery-Web-App",
      image: GalleryDnD,
    },
    {
      name: "Calculator With React",
      demo: "https://calculator-with-react-js.vercel.app/",
      code: "https://github.com/SirDest/Calculator-with-ReactJs",
      image: CalculatorImg,
    },
    {
      name: "TodoList with React",
      demo: "https://destined-todolist.netlify.app/",
      code: "https://github.com/SirDest/TodoList-web-app-with-react-js-and-tailwind-css",
      image: TodoListAppImg,
    },
  ];

  return (
    <div name="work" className=" bg-[#0a192f] w-full h-fit  text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-b-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/**Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/**Grid Item */}
          {/**1 */}
          {work.map((works) => (
            <WorkContainer works={works} key={works.demo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
