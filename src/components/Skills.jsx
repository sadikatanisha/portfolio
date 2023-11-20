const Skills = () => {
  const frontEndSkills = ["HTML", "CSS", "JavaScript", "React", "GitHub"];
  const backEndSkills = ["Node.js", "MongoDB", "SQL"];
  const toolsSkills = ["Tailwind CSS", "Express", "Mongoose"];

  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-teal-500">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 p-6 border border-gray-300 rounded-lg bg-trasparent">
            <h2 className="text-2xl font-semibold text-gray-200">
              Front-End Skills
            </h2>
            <ul className="text-lg mt-4">
              {frontEndSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 p-6 border border-gray-300 rounded-lg bg-transparent">
            <h2 className="text-2xl font-semibold text-gray-200">
              Back-End Skills
            </h2>
            <ul className="text-lg mt-4">
              {backEndSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 p-6 border border-gray-300  rounded-lg bg-transparent">
            <h2 className="text-2xl font-semibold text-gray-200">
              Tools and Frameworks
            </h2>
            <ul className="text-lg mt-4">
              {toolsSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
