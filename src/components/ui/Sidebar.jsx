import React from "react";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
const Sidebar = ({ className, onClose }) => {
  const { mode } = useSelector((state) => state.theme);
  const resumeUrl = import.meta.env.VITE_RESUME_LINK;
  return (
    <div
      className={`${className} ${
        mode === "dark" ? "bg-black border-r border-gray-100" : "bg-white border-r border-gray-300 shadow-lg"
      } flex flex-col md:hidden gap-6 justify-start w-[360px] p-6 h-[100vh] z-50`}
    >
      <div
        className={`ml-auto font-mono text-2xl font-bold text-tertiary cursor-pointer`}
      >
        <RxCross2
          onClick={onClose}
          className={`text-3xl text-highlight hover:text-indigo-900`}
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-6 text-secondary">
        <a
          href="#about"
          className="text-secondary hover:text-highlight hover:underline cursor-pointer"
        >
          About
        </a>
        <a
          href="#skills"
          className="text-secondary hover:text-highlight hover:underline cursor-pointer"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-secondary hover:text-highlight hover:underline cursor-pointer"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-secondary hover:text-highlight hover:underline cursor-pointer"
        >
          Contact
        </a>
        <a
          href={resumeUrl}
          target="_blank"
          className="text-secondary hover:text-highlight hover:underline cursor-pointer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
