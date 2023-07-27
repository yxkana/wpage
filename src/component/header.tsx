import {  motion } from "framer-motion";
import { Sun, Moon } from "react-feather";
import { useState, useEffect } from "react";
import { useCheckScreen } from "~/hooks/ScreenChecker";
import { MoreVertical } from "react-feather";
import { useThemeState } from "~/states/themeStates";
import { useLanguageState } from "~/states/languageState";
import clsx from "clsx";


export function Header() {
  const themeState = useThemeState((state) => state.changeState);
  const item = {
    show: {
      /*  width: "100%", */
      opacity: 1,
      y: -2,
      transition: { duration: 0.1 },

      /* y: -3, */
    },
  };

  const language = useLanguageState((state) => state.czech);
  const setLanguage = useLanguageState((state) => state.changeState);

  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setTheme(theme === "winter" ? "daracula" : "winter");
    themeState(theme === "winter" ? false : true);
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      {!useCheckScreen(820) ? (
        <div className="relative z-40 flex w-full items-center justify-between  text-xl font-bold">
          <div className="flex gap-0 lg:gap-16">
            <p className="text-2xl font-semibold lg:text-4xl">Dk.dev</p>

            <div className="relative top-1 mt-auto flex gap-16">
              <motion.div
                onClick={() => {
                  const element = document.getElementById("skills");
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                whileHover="show"
                className="hover:cursor-pointer"
              >
                <p>{language ? "Dovednosti" : "Skills"}</p>
                <motion.div
                  variants={item}
                  animate={{ y: 0 }}
                  className="h-[3px] w-full rounded-md bg-secondary opacity-0"
                ></motion.div>
              </motion.div>
              <motion.div
                onClick={() => {
                  const element = document.getElementById("projects");
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                whileHover="show"
                className="hover:cursor-pointer"
              >
                <p>{language ? "Projekty" : "Projects"}</p>
                <motion.div
                  variants={item}
                  animate={{ y: 0 }}
                  className="h-[3px] w-full rounded-md bg-secondary opacity-0"
                ></motion.div>
              </motion.div>
              <motion.div
                onClick={() => {
                  const element = document.getElementById("info");

                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                whileHover="show"
                className="hover:cursor-pointer"
              >
                <p>Info</p>
                <motion.div
                  variants={item}
                  animate={{ y: 0 }}
                  className="h-[3px] w-full rounded-md bg-secondary opacity-0"
                ></motion.div>
              </motion.div>
            </div>
          </div>
          <div className="flex gap-16">
            <div className="flex items-center gap-2">
              <p
                onClick={() => {
                  setLanguage(false);
                }}
                className={clsx(
                  "hover:cursor-pointer",
                  language
                    ? "text-[18px]"
                    : "text-xl font-semibold text-secondary"
                )}
              >
                eng
              </p>
              <p>/</p>
              <p
                onClick={() => {
                  setLanguage(true);
                }}
                className={clsx(
                  "hover:cursor-pointer",
                  !language
                    ? "text-[18px]"
                    : "text-xl font-semibold text-secondary"
                )}
              >
                cz
              </p>
            </div>
            <label className="swap-rotate swap btn-secondary btn">
              <input onClick={toggleTheme} type="checkbox" />
              <Sun size={30} className="swap-off"></Sun>
              <Moon size={30} className="swap-on"></Moon>
            </label>
          </div>
        </div>
      ) : (
        <div className="relative z-40 flex h-16 justify-between gap-3">
          <h1 className="my-auto text-2xl font-semibold">Dk.dev</h1>
          <div className="my-auto flex gap-4">
            <label className="swap-rotate swap btn-secondary btn">
              <input onClick={toggleTheme} type="checkbox" />
              <Sun size={20} className="swap-off"></Sun>
              <Moon size={20} className="swap-on"></Moon>
            </label>
            <details className="dropdown-end dropdown">
              <summary className="btn-secondary btn bg-secondary">
                <MoreVertical size={20} className="" />
              </summary>
              <ul className="dropdown-content menu rounded-box z-[1] w-52 bg-base-100 p-2 shadow">
                <li
                  onClick={() => {
                    const element = document.getElementById("skills");
                    element?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  <a>Skills</a>
                </li>
                <li
                  onClick={() => {
                    const element = document.getElementById("projects");
                    element?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  <a>Projects</a>
                </li>
                <li
                  onClick={() => {
                    const element = document.getElementById("info");
                    element?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  <a>Info</a>
                </li>
                <div className="m-auto flex items-center gap-2 py-3">
                  <p
                    onClick={() => {
                      setLanguage(false);
                    }}
                    className={clsx(
                      "hover:cursor-pointer",
                      language
                        ? "text-[13px]"
                        : "text-sm font-semibold text-secondary"
                    )}
                  >
                    eng
                  </p>
                  <p className="text-sm">/</p>
                  <p
                    onClick={() => {
                      setLanguage(true);
                    }}
                    className={clsx(
                      "hover:cursor-pointer",
                      !language
                        ? "text-[13px]"
                        : "text-sm font-semibold text-secondary"
                    )}
                  >
                    cz
                  </p>
                </div>
              </ul>
            </details>
          </div>
        </div>
      )}
    </div>
  );
}
