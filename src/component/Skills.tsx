import Image from "next/image";
import { useState } from "react";
import {
  useShowFrontEndSkill,
  useShowBackEndSkill,
} from "~/states/skillStates";
import { clsx } from "clsx";

export function Skills() {
  return (
    <div className="mt-[200px] gap-32 flex flex-col lg:px-20 xl3:mt-[550px]">
      <h1 className="m-auto text-7xl font-bold">Favorite tools</h1>
      <SkillContainer className="flex items-end justify-end" id="Frontend" />
      <SkillContainer className="flex items-start justify-start" id="Backend" />
    </div>
  );
}

function SkillContainer(props: React.ComponentPropsWithoutRef<"div">) {
  const skillState =
    props.id === "Frontend" ? useShowFrontEndSkill() : useShowBackEndSkill();
  const useState =
    props.id === "Frontend"
      ? useShowFrontEndSkill((state) => state.setSkill)
      : useShowBackEndSkill((state) => state.setSkill);

  return (
    <div {...props}>
      <div className="flex justify-center gap-10">
        {props.id === "Frontend" ? <SkillShower {...props}/> : null}
        <div className="flex flex-col gap-10">
          <h1 className="text-3xl font-semibold lg:text-6xl">{props.id}</h1>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              {skillState.skills.map((data, index) => {
                if (index < 3) {
                  return (
                    <div
                      onClick={() => {
                        useState(index);
                      }}
                      className={clsx(
                        "badge p-4 text-xl shadow-md shadow-slate-700 hover:badge-primary hover:cursor-pointer hover:shadow-lg",
                        index === skillState.skill
                          ? "badge-primary"
                          : "badge-secondary"
                      )}
                    >
                      {data}
                    </div>
                  );
                } else {
                  null;
                }
              })}
            </div>
            <div className="flex gap-3">
              {skillState.skills.map((data, index) => {
                if (index === 5) {
                  return (
                    <div
                      className={
                        "badge badge-secondary p-4 text-xl shadow-md shadow-slate-700"
                      }
                    >
                      {data}
                    </div>
                  );
                } else if (index >= 3) {
                  return (
                    <div
                      onClick={() => {
                        useState(index);
                      }}
                      className={clsx(
                        "badge p-4 text-xl shadow-md shadow-slate-700 hover:badge-primary  hover:cursor-pointer hover:shadow-lg",
                        index === skillState.skill
                          ? "badge-primary"
                          : "badge-secondary"
                      )}
                    >
                      {data}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
        {props.id === "Backend" ? <SkillShower {...props}/> : null}
      </div>
    </div>
  );
}

function SkillShower(props: React.ComponentPropsWithoutRef<"div">) {
  const skillState = props.id === "Frontend" ? useShowFrontEndSkill() : useShowBackEndSkill();

  return (
    <div className="col flex h-64 w-64">
      <Image
        src={"/logos/" + skillState.skills[skillState.skill] + ".svg"}
        alt="frontendLogoImage"
        height={1024}
        width={1024}
      ></Image>
      <div></div>
    </div>
  );
}
