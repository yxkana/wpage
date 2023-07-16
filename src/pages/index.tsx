import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Header } from "~/component/header";
import { Title } from "~/component/title";
import VoxelLoader from "~/component/voxel-loader";
import { Skills } from "~/component/Skills";

const HiVoxelObject = dynamic(() => import("~/component/voxel-art"), {
  ssr: false,
  loading: () => <VoxelLoader />,
});

export default function Home() {
  return (
    <>
      <div
        className="container mx-auto flex flex-col gap-10 lg:gap-52 p-10 xl4:px-80
      "
      >
        <Header></Header>
        <Title></Title>
        <HiVoxelObject />
        <Skills/>
      </div>
      {/* Header */}
    </>
  );
}
