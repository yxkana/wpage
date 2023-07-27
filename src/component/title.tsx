import Typed from "typed.js";
import { useEffect, useRef } from "react";

import { useLanguageState } from "~/states/languageState";
import clsx from "clsx";


export function Title() {
  const el = useRef(null);
  const language = useLanguageState((state) => state.czech);

  useEffect(() => {
    const typed = new Typed(el.current, {
      loop: true,
      loopCount: Infinity,
      strings: ["Designer^2000", "Programmer^2000"],
      typeSpeed: 50,
      backSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
   
      <div className="flex flex-col gap-2 lg:gap-10">
        <div className="flex gap-3 lg:gap-5 text-3xl lg:text-6xl font-semibold">
          <p>{clsx(language ? "Zdravím, jsem" : "Hello, I’m")}</p>
          <p className="text-3xl lg:text-6xl">Daniel</p>
        </div>
        <div>
          <span className="text-[44px] lg:text-8xl font-bold text-secondary" ref={el}></span>
        </div>
      </div>
     
   
  );
}
