import Image from "next/image";

const frontendLogos = [
  "/logos/tailwind_logo.svg",
  "/logos/daisy_logo.svg",
  "/logos/react_logo.svg",
];

export function Skills() {
  return (
    <div className="mt-[550px] flex flex-col -z-10">
      <SkillContainer />
    </div>
  );
}

function SkillContainer(props: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} className="flex items-end justify-end">
      <div className="flex justify-center">
        <SkillShower />
        <div className="flex flex-col w-1/2 items-start mx-auto">
          <h1 className="text-4xl">Frontend</h1>
          <p className="break-words w-1/2">
            dasdda adasd kadak aksdkaj dkasjkd akdjaksjd askdjak aksdaksdj
            kadjaksjd kdjalksd sdadasd dasda dasdad
          </p>
        </div>
      </div>
    </div>
  );
}

function SkillShower(props: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="col flex h-80 w-80">
      <Image
        src={frontendLogos[1]!}
        alt="frontendLogoImage"
        height={1024}
        width={1024}
      ></Image>
      <div></div>
    </div>
  );
}
