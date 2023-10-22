import React, { useState } from "react";
import { animate, motion } from "framer-motion";
// import { links } from "../data/data.js";
import { Link } from "react-scroll";
import clsx from "clsx";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-[#0a192f] bg-opacity-80 shadow-lg shadow-black-[0.03] blackdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed w-[20rem] top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial]  sm:w-[22rem] sm:py-0 px-3">
        <ul className="flex  flex-wrap items-center justify-center gap-2 text-[1rem] font-medium text-gray-300 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, x: "-50%", opacity: 0 }}
              animate={{ y: 0, x: "-50%", opacity: 1 }}
            >
              {" "}
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-teal-500 transition ",
                  { "text-teal-500": activeSection === link }
                )}
                activeClass="active"
                to={link.toLowerCase()} //might have to change
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
                onClick={() => setActiveSection(link)}
              >
                {link}
                {link == activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
