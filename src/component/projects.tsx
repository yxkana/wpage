import clsx from "clsx";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { title } from "process";
import { useThemeState } from "~/states/themeStates";
import { useLanguageState } from "~/states/languageState";
import { useWindowSize, useMediaQuery } from "usehooks-ts";

export function Projects() {
  const theme = useThemeState((state) => state.dark);
  const pinnetimg = clsx(
    theme
      ? "/project_img/pinnet_dark_img.png"
      : "/project_img/pinnet_light_img.png"
  );

  const language = useLanguageState((state) => state.czech);

  const frontend = language
    ? "Pár dalších frontend projektů"
    : "Couple of more frontend projects";
  const artcept = language
    ? "Stránka na vytváření concept artů za pomocí AI"
    : "Website for generating concept arts with use of AI";
  const noted = language
    ? "Přihlašovací component s book flip animací"
    : "Login component with book flip animation";
  const pinnet = language
    ? "Jednoduchá to-do aplikace, kde můžete umístit poznámky kdekoli na obrazovku."
    : "Simple to-do app, where you can place notes anywhere on the screen";

  const weather = language
    ? "Aplikace na počasí, s předpovědí až na pět dní a ukládáním lokací"
    : "Weather applications, with up to five days of forecasts and location storage";

  return (
    <div id="projects" className="flex flex-col items-center gap-16 xl:gap-60">
      <h1 className="text-5xl lg:text-7xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-2">
        <Project
          imgString="/project_img/fem_img.png"
          title="Frontend Mentor"
          text={frontend}
          url="https://www.frontendmentor.io/profile/yxkana"
        />
        <Project
          imgString="/project_img/artcept_img.png"
          title="ArtceptAI"
          text={artcept}
          url="https://artceptai.vercel.app/"
        />
        <Project
          imgString="/project_img/noted_img.png"
          title="Login Concept"
          text={noted}
          url="https://login-concept.vercel.app/"
        />
        <Project
          imgString={pinnetimg}
          title="Pinnet"
          text={pinnet}
          url="https://pinnet.vercel.app/"
        />
        <Project
          imgString="/project_img/weatherteller2_img.png"
          title="Weather Teller"
          text={weather}
          url="https://play.google.com/store/apps/details?id=weather.teller"
        />
      </div>
    </div>
  );
}

interface ProjectObj {
  title: string;
  text: string;
  imgString: string;
  url: string;
}

function Project(props: ProjectObj) {
  const imgTab = {
    hover: {
      opacity: 1,

      transition: { duration: 0.2 },
    },
  };

 

  const limit = !useMediaQuery("((min-width: 1024px)");


  return (
    <motion.div
      whileHover="hover"
      className="w- relative h-[150px] w-[280px] rounded-2xl bg-base-200 object-fill lg:h-[300px]  lg:w-[568px]"
    >
      <Image
        className="rounded-2xl"
        fill
        src={props.imgString}
        alt={props.title}
      ></Image>
      <Link href={props.url} target="_blank">
        <motion.div className="absolute flex h-full w-full flex-col gap-5  rounded-2xl bg-base-200 bg-opacity-0 p-4 hover:cursor-pointer hover:bg-opacity-70 lg:gap-12 lg:p-10">
          <motion.h1
            initial={limit ? { opacity: 1 } : { opacity: 0 }}
            variants={imgTab}
            className="mr-auto rounded-xl bg-base-300 bg-opacity-50 p-2 text-lg font-semibold lg:text-4xl xl:p-3"
          >
            {props.title}
          </motion.h1>
          <motion.p
            initial={limit ? { opacity: 1 } : { opacity: 0 }}
            variants={imgTab}
            className="font-medi ml-auto mt-auto  w-[75%] rounded-xl bg-base-300 bg-opacity-50 p-2 text-xs lg:p-3 lg:text-xl"
          >
            {props.text}
          </motion.p>
        </motion.div>
      </Link>
    </motion.div>
  );
}
