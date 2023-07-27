import React from "react";

import { SkillContainerFrondend } from "./frontEndTools";
import { SkillContainerBackend } from "./backEndTools";

export function Skills() {
  return (
    <div>
      <div id="skills" className="flex flex-col gap-16 lg:gap-60">
        <h1 className="m-auto text-5xl font-bold lg:text-7xl">
          Favorite tools
        </h1>
        <SkillContainerFrondend />
        <SkillContainerBackend />
      </div>
    </div>
  );
}
