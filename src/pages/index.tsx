import dynamic from "next/dynamic";
import { Header } from "~/component/header";
import { Title } from "~/component/title";
import VoxelLoader from "~/component/voxel-loader";
import { Skills } from "~/component/Skills";
import { Info } from "~/component/Info";
import { Projects } from "~/component/projects";
import { FooterBlok } from "~/component/footer";

const HiVoxelObject = dynamic(() => import("~/component/voxel-art"), {
  ssr: false,
  loading: () => <VoxelLoader />,
});

export default function Home() {
  return (
    <>
      <div
        id="appBody"
        className="container mx-auto flex flex-col gap-10 p-6 md:p-10 lg:gap-52 xl4:px-80
      "
      >
        <Header></Header>
        <Title></Title>
        <HiVoxelObject />

        <div className="mt-[650px] flex flex-col gap-24 lg:px-20 xl:gap-[350px] xl2:mt-[500px] xl4:mt-[700px]">
          <Info />
          <Skills />
          <Projects />
          <FooterBlok />
        </div>
      </div>
      {/* Header */}
    </>
  );
}
