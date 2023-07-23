import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Header } from "~/component/header";
import { Title } from "~/component/title";
import VoxelLoader from "~/component/voxel-loader";
import { Skills } from "~/component/Skills";
import { Info } from "~/component/Info";

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
        
        <div className="lg:px-20 mt-[600px] xl2:mt-[100px]">
          <Info />
         <Skills />
        </div>
      </div>
      {/* Header */}
    </>
  );
}
