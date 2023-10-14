import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-teal-500 ">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className="shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 p-6 border border-gray-200 rounded-lg bg-white">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="text-lg font-semibold mt-4 text-black">HTML</p>
          </div>
          <div className="shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 p-6 border border-gray-200 rounded-lg bg-white">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="text-lg font-semibold mt-4 text-black">CSS</p>
          </div>
          <div className="shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 p-6 border border-gray-200 rounded-lg bg-white">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="text-lg font-semibold mt-4 text-black">JAVASCRIPT</p>
          </div>
          <div className="shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 p-6 border border-gray-200 rounded-lg bg-white">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="text-lg font-semibold mt-4 text-black">REACT</p>
          </div>
          <div className="shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 p-6 border border-gray-200 rounded-lg bg-white">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="text-lg font-semibold mt-4 text-black">GITHUB</p>
          </div>
          <div className="shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 p-6 border border-gray-200 rounded-lg bg-white">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="text-lg font-semibold mt-4 text-black">NODE JS</p>
          </div>
          <div className="shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 p-6 border border-gray-200 rounded-lg bg-white">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="text-lg font-semibold mt-4 text-black">MONGO DB</p>
          </div>
          <div className="shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 p-6 border border-gray-200 rounded-lg bg-white">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="text-lg font-semibold mt-4 text-black">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
