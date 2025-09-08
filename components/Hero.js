"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../app/globals.css";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const imageRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className=" flex items-center justify-center flex-col text-center py-20 md:py-30 px-4 md:px-8">
      <div className="">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold gradient-title">
          Your AI Career Coach For
          <p>Professional Success</p>
        </h1>
        <p className="text-muted-foreground mx-auto max-w-[600px] text-lg md:text-xl">
          Advance your career with personalized guidance, interview prep, and
          AI-powered tools for job success.
        </p>
        <div className="mt-5 flex gap-4 justify-center">
          <Button
            onClick={() => router.push("/sign-in")}
            size="lg"
            className="px-8 cursor-pointer"
          >
            {/* <Link href={"/sign-in"}>Get Started</Link> */}
            Get Started
          </Button>
          <Button
            onClick={() => router.push("/dashboard")}
            variant="outline"
            size="lg"
            className="px-8 cursor-pointer"
          >
            {/* <Link href={"/dashboard"}>Learn More</Link> */}
            Learn More
          </Button>
        </div>
      </div>

      <div className="mt-5 hero-image-wrapper">
        <div ref={imageRef} className="hero-image">
          <Image
            src="/banner.jpeg"
            width={1280}
            height={750}
            alt="SenAi Banner"
            priority
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
