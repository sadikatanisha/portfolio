import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { animate, motion } from "framer-motion";
import { links } from "../data/data.js";
import { Link } from "react-scroll";
import clsx from "clsx";
// import Logo from "../assets/logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const navLinks = links;

  return (
    <header className="z-[999] relative">
      {/* <div className="fixed w-full h-[80px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300 z-10"> */}
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-[#0a192f] bg-opacity-80 shadow-lg shadow-black-[0.03] blackdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-300 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          >
            <Link
              className={clsx(
                "flex w-full items-center justify-center px-3 py-3 hover:text-teal-500 transition ",
                { "text-teal-500": activeSection === "Home" }
              )}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={1000}
              isDynamic={true}
              // onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          >
            <Link
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={1000}
              isDynamic={true}
              // onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              About
            </Link>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          >
            <Link
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={1000}
              isDynamic={true}
              // onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              Skills
            </Link>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          >
            <Link
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={1000}
              isDynamic={true}
              // onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              Projects
            </Link>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          >
            <Link
              className="flex w-full items-center justify-center px-3 py-3 hover:text-teal-500 transition dark:text-gray-500 dark:hover:text-gray-300"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={1000}
              isDynamic={true}
              // onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              Contact
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
