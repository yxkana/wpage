import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Inconsolata } from "next/font/google";




const lilita = Inconsolata({ subsets: ["latin-ext"], weight: ["700"] });

export function Title() {
  const el = useRef(null);

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
    <div className="flex flex-col gap-10">
    <div className="text-6xl gap-5 flex font-semibold">
        <p>Hello, I’m</p>
        <p className="text-6xl">Daniel Kaválek</p>
    </div>
      <div>
        <span className="text-8xl font-bold text-secondary" ref={el}></span>
      </div>
    </div>
  );
}
