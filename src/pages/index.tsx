import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Header } from "~/component/header";
import { Title } from "~/component/title";
import VoxelLoader from "~/component/voxel-loader";
import { Skills } from "~/component/Skills";
import { Info } from "~/component/Info";
import { Projects } from "~/component/projects";

const HiVoxelObject = dynamic(() => import("~/component/voxel-art"), {
  ssr: false,
  loading: () => <VoxelLoader />,
});

export default function Home() {
  return (
    <>
      <div
        className="container mx-auto flex flex-col gap-10 p-10 lg:gap-52 xl4:px-80
      "
      >
        <Header></Header>
        <Title></Title>

        <div className="mt-[600px] flex flex-col gap-[200px] lg:px-20 xl2:mt-[100px]">
          <Info />
          <Skills />
          <Projects />
        </div>
      </div>
      {/* Header */}
    </>
  );
}
