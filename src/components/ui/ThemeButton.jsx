import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {toggleTheme} from "../../store/slice/themeSlice";

const ThemeButton = () => {
  const { mode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(toggleTheme());
  }

  return (
    <button
      onClick={handleToggle}
      className={`${mode === "dark" ? "bg-white/10" : ""}  rounded-full p-2 cursor-pointer transition-all duration-300`}
    >
      {mode === "dark" ? (
        <MdLightMode className="text-3xl text-highlight" />
      ) : (
        <MdDarkMode className="text-3xl text-stroke" />
      )}
    </button>
  );
};

export default ThemeButton;
