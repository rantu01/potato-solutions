import Image from "next/image";
import Hero from "../components/home/Hero";
import Philosophy from "../components/home/Philosophy";
import CustomDevelopment from "../components/home/CustomDevelopment";
import Transformation from "../components/home/Transformation";
import MotionWrapper from "../components/common/MotionWrapper";

export default function Home() {
  return (
    <div className="">
      <MotionWrapper>
        <Hero />
      </MotionWrapper>

      <MotionWrapper>
        <Philosophy />
      </MotionWrapper>

      <MotionWrapper>
        <CustomDevelopment />
      </MotionWrapper>

      <MotionWrapper>
        <Transformation />
      </MotionWrapper>
    </div>
  );
}
