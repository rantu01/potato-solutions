import Image from "next/image";
import Hero from "../components/home/Hero";
import Philosophy from "../components/home/Philosophy";
import CustomDevelopment from "../components/home/CustomDevelopment";
import Transformation from "../components/home/Transformation";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <Philosophy></Philosophy>
      <CustomDevelopment></CustomDevelopment>
      <Transformation></Transformation>
    </div>
  );
}
