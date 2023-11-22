import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { useState } from "react";
function App() {
  const [activeSection, setActiveSection] = useState("Home");
  return (
    <div className="App ">
      {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-1"></div>
      <div className="bg-[#899fbc] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-1"></div> */}
      <Navbar
        // activeSection={activeSection}
        // setActiveSection={setActiveSection}
      />
      <Home />
      <About />
      <Skills />

      <Work />
      <Contact />
    </div>
  );
}

export default App;
