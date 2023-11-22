import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  const projects = data;

  return (
    <div name="work" className="w-full h-full text-gray-300 bg-[#0a192f] py-10">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-teal-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-transparent p-4 rounded-md shadow-lg flex flex-col h-full"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />

              {/* Description and Tech Stacks */}
              <div className="flex flex-col flex-grow">
                <div>
                  <p className="text-lg font-bold mb-2">{project.name}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>

                {/* Tech Stacks */}
                <div className="flex mb-4 mt-auto">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-200 text-gray-700 rounded-md px-2 mr-2 mb-2 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex space-x-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gray-100 px-5 py-2 rounded-full  dark:bg-gray-800 border border-gray-500">
                    Code
                  </button>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gray-100 px-5 py-2 rounded-full  dark:bg-gray-800 border border-gray-500">
                    Live
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
