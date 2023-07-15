import Typed from "typed.js";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Inconsolata } from "next/font/google";
import VoxelLoader from "~/component/voxel-loader";

const HiVoxelObject = dynamic(() => import("~/component/voxel-art"), {
  ssr: false,
  loading: () => <VoxelLoader />,
});

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
    <div className="flex flex-col md:flex-row relative">
      <div className="flex flex-col gap-10">
        <div className="flex gap-5 text-6xl font-semibold">
          <p>Hello, I’m</p>
          <p className="text-6xl">Daniel Kaválek</p>
        </div>
        <div>
          <span className="text-8xl font-bold text-secondary" ref={el}></span>
        </div>
      </div>
      <HiVoxelObject/>
    </div>
  );
}
