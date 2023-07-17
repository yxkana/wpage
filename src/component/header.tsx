import { animate, motion } from "framer-motion";
import { Sun, Moon, Divide } from "react-feather";
import { useState, useEffect } from "react";
import { useCheckScreen } from "~/hooks/ScreenChecker";
import { MoreVertical } from "react-feather";
import { useThemeState } from "~/states/themeStates";


export function Header() {

  const themeState = useThemeState((state)=> state.changeState);
  const item = {
    show: {
      /*  width: "100%", */
      opacity: 1,
      y: -2,
      transition: { duration: 0.1 },

      /* y: -3, */
    },
  };

  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setTheme(theme === "winter" ? "daracula" : "winter");
    themeState(theme === "winter" ? false : true);
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  console.log(useCheckScreen(1000));
  return (
    <div>
      {!useCheckScreen(820) ? (
        <div className="flex z-40 relative w-full items-center justify-between  text-xl font-bold">
          <div className="flex gap-0 lg:gap-16">
            <p className="text-2xl lg:text-4xl font-semibold">Dk.dev</p>

           <div className="flex mt-auto relative top-1 gap-16">
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
          </div>

          <label className="swap-rotate swap btn-secondary btn">
            <input onClick={toggleTheme} type="checkbox" />
            <Sun size={30} className="swap-off"></Sun>
            <Moon size={30} className="swap-on"></Moon>
          </label>
        </div>
      ) : (
        <div className="flex relative z-40 justify-end gap-3 h-16">
          <label className="swap-rotate swap btn-secondary btn">
            <input onClick={toggleTheme} type="checkbox" />
            <Sun size={20} className="swap-off"></Sun>
            <Moon size={20} className="swap-on"></Moon>
          </label>
          <details className="dropdown dropdown-end mb-32">
            <summary className="btn btn-secondary bg-secondary"><MoreVertical size={20} className=""/></summary>
            <ul className="dropdown-content menu rounded-box z-[1] w-52 bg-base-100 p-2 shadow">
              <li>
                <a>Skills</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Info</a>
              </li>
              <li>
                <a>Contacs</a>
              </li>
            </ul>
          </details>
        </div>
      )}
    </div>
  );
}
