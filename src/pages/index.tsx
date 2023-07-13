import Head from "next/head";
import Link from "next/link";
import dynamic from 'next/dynamic'
import { Header } from "~/component/header";
import { Title } from "~/component/title";
import VoxelLoader from "~/component/voxel-loader";

const HiVoxelObject = dynamic(() => import('~/component/voxel-art'), {
  ssr: false,
  loading: () => <VoxelLoader />
})


export default function Home() {
  return (
    <>
      <div className="gap-52 p-10 flex flex-col container mx-auto">
        <Header></Header>
        <Title></Title>
        <HiVoxelObject />
      </div>
      {/* Header */}
    </>
  );
}
