import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* contianer */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Sadika Rahman
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Developer and designer.
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Software Engineer providing services for programming and design
            content needs. Join me down below and let's create!
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://twitter.com/tanishasadika" target="__blank">
              <AiFillTwitterCircle className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/sadika-rahman/"
              target="__blank"
            >
              <AiFillLinkedin className="cursor-pointer" />
            </a>
            <a href="https://github.com/sadikatanisha" target="__blank">
              <AiFillGithub className="cursor-pointer" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
            <Link
              to="contact"
              className="group bg-teal-600 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-teal-500 active:scale-105 transition cursor-pointer"
            >
              Contact Me
            </Link>
            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="/CV.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
