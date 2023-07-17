import { Mail, GitHub } from "react-feather";
import Image from "next/image";
import { useEffect } from "react";
import { useThemeState } from "~/states/themeStates";

export function Info() {
  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

 const themeState = useThemeState((state)=> state.dark);
  
  return (
    <div className="px-60">
      <h2 className="mb-16 text-6xl font-semibold">Něco málo o mně</h2>
      <div className="text-2xl leading-9 tracking-wider">
        <p className="">
          {" "}
          Jsem bývalí it guy, začal jsem se učit web development, protože jsem
          chtěl dělat něco truchu více creativního než jen "nastavovat routery",
          mám chuť se nadále sebezlepšovat a učit se novým věcem v tomto oboru.
        </p>
        <br />
        <p>
          Bohužel zatím nemám žádnou profesionální zkušenost v tomto oboru, mám
          ale za sebou pár praktických projektu a kurzů, které jsou k vidění
          níže spolu s pomůckami, které jsem uplatnil během těchto projektů. A
          jsem připraven zkušenosti které jsem se naučil uplatnit v praxi.
        </p>
        <div className="mt-6 flex gap-6">
          <button
            onClick={() =>
              openInNewTab("https://github.com/yxkana?tab=repositories")
            }
            className="btn-secondary btn-circle btn"
          >
            <GitHub className="" />
          </button>
          <button className="btn-secondary btn-circle btn">
            <Mail className="" />
          </button>
          <div className="tooltip tooltip-bottom tooltip-secondary" data-tip="Frontend Mentor">
          <button className="btn-secondary mb-3 btn-circle btn">
            <Image
            className="text-red-500"
              src={"references/ss.svg"}
              height={20}
              width={20}
              alt="Frontend mentor button img"
            ></Image>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
