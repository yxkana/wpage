import React from "react";

import { SkillContainerFrondend } from "./frontEndTools";
import { SkillContainerBackend } from "./backEndTools";

export function Skills() {
  return (
    <div>
      <div className="flex flex-col gap-16 lg:gap-52">
        <h1 className="m-auto text-5xl font-bold lg:text-7xl">
          Favorite tools
        </h1>
        <SkillContainerFrondend />
        <SkillContainerBackend />
      </div>
    </div>
  );
}
