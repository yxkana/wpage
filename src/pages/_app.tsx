import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "300", "400", "700", "900"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
