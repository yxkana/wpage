import { Mail, GitHub} from "react-feather";
import Image from "next/image";
import {  useState } from "react";
import { useThemeState } from "~/states/themeStates";

import { useLanguageState } from "~/states/languageState";

export function Info() {
  const language = useLanguageState((state) => state.czech);
  return (
    <div id="info" className="lg:px-20 xl:px-60">
      {language ? (
        <h2 className="mb-16 text-5xl font-semibold lg:text-6xl">
          Něco málo o mně
        </h2>
      ) : (
        <h2 className="mb-16 text-5xl w-[70%] lg:w-full leading-snug lg:leading-none font-semibold lg:text-6xl">
          Something about me
        </h2>
      )}
      <div className="text-xl tracking-wider lg:text-2xl lg:leading-9 lg:tracking-wider">
        {language ? (
          <p>
            Jsem bývalí it guy, začal jsem se učit web development, protože jsem
            chtěl dělat, něco truchu více creativního než jen &quot;nastavovat
            routery&quot;, furt zkouším a učím se nové věci, a obecně se chci furt
            zlepšovat v tomto oboru.
          </p>
        ) : (
          <p>
            I&apos;m a former it guy, I started learning web development, because I
            wanted to do, something a little more creative than just &quot;set up
            routers&quot;, I keep trying and learning new things and in general, want
            to keep improving in this field.
          </p>
        )}
        <br />
        {language ? (
          <p>
            Bohužel zatím nemám žádnou profesionální zkušenost v tomto oboru,
            mám ale za sebou pár praktických projektu a kurzů, které jsou k
            vidění níže spolu s nástroji, které jsem uplatnil během těchto
            projektů. A jsem připraven zkušenosti, které jsem se naučil uplatnit
            v praxi.
          </p>
        ) : (
          <p>
            Unfortunately, I have no professional experience in this field yet,
            but I have done a few practical projects and courses that are
            on display below, along with the tools I&apos;ve applied during those
            projects, and I&apos;m ready to put what I&apos;ve learned into practice.
          </p>
        )}
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
            void openInNewTab("https://github.com/yxkana?tab=repositories")
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
          void navigator.clipboard.writeText("kavalek.daniel01@gmail.com");
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
      onClick={
        ()=>{
          void openInNewTab("https://www.frontendmentor.io/profile/yxkana")
        }
      }
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
    <div className="toast-start toast">
      <div className="alert alert-info text-lg">
        <span>Address copied.</span>
      </div>
    </div>
  );
}
