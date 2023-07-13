import { animate, motion } from "framer-motion";
import { Sun, Moon } from "react-feather";
import { useState, useEffect } from "react";

export function Header() {
  const item = {
    show: {
      /*  width: "100%", */
      opacity: 1,
      y: -2,
      transition: { duration: 0.1 },

      /* y: -3, */
    },
  };

  const [theme, setTheme] = useState("winter");

  const toggleTheme = () => {
    setTheme(theme === "dracula" ? "winter" : "dracula");
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex w-full justify-between  text-2xl font-bold">
      <div className="flex gap-16">
        <motion.div whileHover="show" className="hover:cursor-pointer">
          <p>Skills</p>
          <motion.div
            variants={item}
            animate={{ y: 0 }}
            className="h-[3px] w-full rounded-md bg-secondary opacity-0"
          ></motion.div>
        </motion.div>
        <motion.div whileHover="show" className="hover:cursor-pointer">
          <p>Projects</p>
          <motion.div
            variants={item}
            animate={{ y: 0 }}
            className="h-[3px] w-full rounded-md bg-secondary opacity-0"
          ></motion.div>
        </motion.div>
        <motion.div whileHover="show" className="hover:cursor-pointer">
          <p>Info</p>
          <motion.div
            variants={item}
            animate={{ y: 0 }}
            className="h-[3px] w-full rounded-md bg-secondary opacity-0"
          ></motion.div>
        </motion.div>
        <motion.div whileHover="show" className="hover:cursor-pointer">
          <p>Contacs</p>
          <motion.div
            variants={item}
            animate={{ y: 0 }}
            className="h-[3px] w-full rounded-md bg-secondary opacity-0"
          ></motion.div>
        </motion.div>
      </div>
      
        <label className="btn btn-secondary swap swap-rotate">
          <input onClick={toggleTheme} type="checkbox" />
          <Sun size={30} className="swap-on"></Sun>
          <Moon size={30} className="swap-off"></Moon>
        </label>
      
    </div>
  );
}
