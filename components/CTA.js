import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="text-center px-4 md:px-8 py-8 md:py-14 mb-12 gradient">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 md:gap-8">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter text-primary-foreground  font-bold">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-gray-600 text-lg max-w-[550px] text-center mx-auto m-5">
            Join thousands of professionals who are advancing their careers with
            AI-powered guidance.
          </p>
          <Link href={"/dashboard"}>
            <Button
              size={"lg"}
              variant={"secondary"}
              className={"animate-bounce gap-4"}
            >
              Start Your Journey Today <ArrowRight />
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 w-[90%] md:w-[80%] mx-auto"></div>
      </div>
    </section>
  );
};

export default CTA;
