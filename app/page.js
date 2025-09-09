import HeroSection from "@/components/Hero";
import Image from "next/image";
import Features from "@/components/Features";
import Acheivements from "@/components/Acheivements";
import Works from "@/components/Works";
import Feedback from "@/components/Feedback";
import Faqs from "@/components/Faqs";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="">
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_25%,#000_70%,transparent_100%)]"></div>
      <HeroSection />
      <Features />
      <Acheivements />
      <Works />
      <Feedback />
      <Faqs />
      <CTA />
    </div>
  );
}
