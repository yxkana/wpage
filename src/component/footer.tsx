import { User, MapPin,Mail } from "react-feather";

export function FooterBlok() {
  return (
    <div className="footer footer-center flex-col flex md:flex-row justify-center gap-16 mx-0 lg:mx-5">
      <div className="flex flex-col items-start">
        <h1 className="text-xl font-semibold">Dk.dev</h1>
        <p className="text-2xl font-medium">Personal Website</p>
      </div>
      <div className="flex flex-col items-start">
        <div className="flex gap-3">
          <User />
          <p>Daniel Kaválek</p>
        </div>
        <div className="flex gap-3">
          <Mail />
          <p>kavalek.daniel01@gmail.com</p>
        </div>
        <div className="flex gap-3">
          <MapPin />
          <p>Hradec Králove</p>
        </div>
      </div>
    </div>
  );
}
