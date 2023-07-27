import { useShowBackEndSkill } from "~/states/skillStates";
import {motion, useInView, useAnimationControls} from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import Image from "next/image"



export function SkillContainerBackend() {
    const skillState = useShowBackEndSkill()
      
    const showImg = useShowBackEndSkill((state) => state.setSkill)
  
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimationControls();
    
  
    const [toolsAnimationState, setToolsAnimationState] = useState(false);
    const [toolsAnimationState2, setToolsAnimationState2] = useState(false);
  
    useEffect(() => {
      if (isInView) {
       void controls
          .start({
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          })
          .then(() => {
            setToolsAnimationState(true);
          })
          .then(() => {
            setTimeout(() => {
              setToolsAnimationState2(true);
            }, 300);
          });
      }
    }, [isInView]);
  
    const container = {
      hidden: { opacity: 0, scale: 1 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0,
          ease: "easeOut",
        },
      },
    };
  
    const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: [0, 0, 1],
      },
    };
  
    return (
      <div className="flex items-start justify-start" ref={ref}>
        <motion.div
          animate={controls}
          initial={
             {x: "-800px", opacity: 0 }
          }
          className="justify-center  gap-10 xl:flex"
        >
          <div className="flex flex-col gap-10">
            <h1 className="text-3xl font-semibold lg:text-6xl">Backend</h1>
            <div className="flex flex-col gap-3">
              <motion.ul
                variants={container}
                initial="hidden"
                animate={toolsAnimationState ? "visible" : ""}
                className="flex gap-3"
              >
                {skillState.skills.map((data, index) => {
                  if (index < 3) {
                    return (
                      <motion.li
                      key={index}
                        variants={item}
                        onClick={() => {
                          showImg(index);
                        }}
                        className={clsx(
                          "badge overflow-hidden text-ellipsis whitespace-nowrap p-4 text-base shadow-md shadow-slate-700 hover:badge-primary hover:cursor-pointer hover:shadow-lg lg:text-xl",
                          index === skillState.skill
                            ? "badge-primary"
                            : "badge-secondary"
                        )}
                      >
                        {data}
                      </motion.li>
                    );
                  } else {
                    null;
                  }
                })}
              </motion.ul>
              <motion.ul
                variants={container}
                initial="hidden"
                animate={toolsAnimationState2 ? "visible" : ""}
                className="flex gap-3"
              >
                {skillState.skills.map((data, index) => {
                  if (index >= 3) {
                    return (
                      <motion.li
                      key={index}
                        variants={item}
                        onClick={() => {
                          showImg(index);
                        }}
                        className={clsx(
                          "badge overflow-hidden text-ellipsis whitespace-nowrap p-4 text-base shadow-md shadow-slate-700 hover:badge-primary hover:cursor-pointer  hover:shadow-lg lg:text-xl",
                          index === skillState.skill
                            ? "badge-primary"
                            : "badge-secondary"
                        )}
                      >
                        {data}
                      </motion.li>
                    );
                  }
                })}
              </motion.ul>
            </div>
          </div>
          <SkillShower/>
        </motion.div>
      </div>
    );
  }
  
  function SkillShower() {
    const skillState =
      useShowBackEndSkill();
  
    return (
      <div className="col mx-auto mt-10 flex h-48 w-48 xl:mx-0 xl:mt-0 xl:h-64 xl:w-64">
        <Image
          src={"/logos/" + skillState.skills[skillState.skill]! + ".svg"}
          alt="frontendLogoImage"
          height={1024}
          width={1024}
        ></Image>
        <div></div>
      </div>
    );
  }