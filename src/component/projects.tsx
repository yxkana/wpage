import Image from "next/image";
import Link from "next/link";
import { title } from "process";

export function Projects() {
  return (
    <div className="flex flex-col items-center gap-52">
      <h1 className="text-7xl font-bold">Projects</h1>
      <div className="grid grid-cols-2 gap-12">
        <Project
          imgString="/project_img/fem_img.png"
          title="Frontend Mentor"
          text="Tady můžete vydět pár mích jednoduchých frontend designů"
          url="https://www.frontendmentor.io/profile/yxkana"
        />
        <Project
          imgString="/project_img/artcept_img.png"
          title="Frontend Mentor"
          text="Tady můžete vydět pár mích jednoduchých frontend designů"
          url="https://artceptai.vercel.app/"
        />
        <Project
          imgString="/project_img/noted_img.png"
          title="Login Concept"
          text="Concept of login component with book flip animation"
          url="https://login-concept.vercel.app/"
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
  return (
    <div className="h-[300px] w-[568px] w- relative rounded-2xl bg-base-200  object-fill">
      <Image
        className="rounded-2xl"
        fill
        src={props.imgString}
        alt={props.title}
      ></Image>
      {/* <Link
        target="_blank"
        href={props.url}
        className="absolute flex h-full w-full flex-col gap-12 rounded-2xl bg-base-200 bg-opacity-0 p-10 hover:cursor-pointer hover:bg-opacity-70"
      >
        <h1 className="rounded-xl bg-base-300 bg-opacity-50 p-3 text-5xl font-semibold">
          {props.title}
        </h1>
        <p className="ml-auto mt-auto w-[75%]  rounded-xl bg-base-300 bg-opacity-50 p-3 text-2xl font-medium">
          {props.text}
        </p>
      </Link> */}
    </div>
  );
}
