import { Mail, GitHub,ExternalLink,Clipboard } from "react-feather";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useThemeState } from "~/states/themeStates";
import { set } from "zod";

export function Info() {
  return (
    <div className="lg:px-20 xl:px-60">
      <h2 className="mb-16 text-4xl lg:text-6xl font-semibold">Něco málo o mně</h2>
      <div className="text-xl lg:text-2xl tracking-wider lg:leading-9 lg:tracking-wider">
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
        <References />
      </div>
    </div>
  );
}

function References() {
  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const [toast, setToast] = useState(false);

  const showToast = function () {
    setToast(true);
    setTimeout(hideToast, 3000);

    function hideToast() {
      return setToast(false);
    }
  };

  const themeState = useThemeState((state) => state.dark);
  return (
    <div className="mt-6 flex gap-6">
      {/* Github */}
      <div
        className="tooltip-secondary tooltip tooltip-bottom"
        data-tip="Github"
      >
        <button
          onClick={() =>
            openInNewTab("https://github.com/yxkana?tab=repositories")
          }
          className="btn-secondary btn-circle btn"
        >
          <GitHub className="" />
        </button>
      </div>
      {/* Email */}
      <div
        className="tooltip-secondary tooltip tooltip-bottom"
        data-tip="kavalek.daniel01@gmail.com"
      >
        <button
          onClick={() => {
            navigator.clipboard.writeText("kavalek.daniel01@gmail.com");
            if (toast === false) {
              showToast();
            }
          }}
          className="btn-secondary btn-circle btn"
        >
          <Mail />
        </button>
      </div>
      {/* Frontendmentor */}
      <div
        className="tooltip-secondary tooltip tooltip-bottom"
        data-tip="Frontend Mentor"
      >
        <button className="btn-secondary btn-circle btn mb-3">
          <Image
            src={
              themeState
                ? "references/frontendmentor-white.svg"
                : "references/frontendmentor-black.svg"
            }
            height={20}
            width={20}
            alt="Frontend mentor button img"
          ></Image>
        </button>
      </div>
      {toast ? <EmailToast /> : <></>}
    </div>
  );
}

function EmailToast() {
  return (
    <div className="toast toast-start">
      <div className="alert alert-info text-lg">
        <span>Address copied.</span>
      </div>
    </div>
  );
}
