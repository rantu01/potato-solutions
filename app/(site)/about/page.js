import AboutHero from "@/app/components/about/AboutHero";
import WhyPotato from "@/app/components/about/WhyPotato";
import MotionWrapper from "@/app/components/common/MotionWrapper";
import Image from "next/image";

export default function about() {
  return (
    <div >
      <MotionWrapper>
        <AboutHero />
      </MotionWrapper>
      <MotionWrapper>
        <WhyPotato />
      </MotionWrapper>
    </div>
  );
}
