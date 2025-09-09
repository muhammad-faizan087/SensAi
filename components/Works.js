import { howItWorks } from "@/data/how-it-works";
import React from "react";
import { Card, CardContent } from "./ui/card";

const Works = () => {
  return (
    <section
      id="how-it-works"
      className="text-center px-4 md:px-8 py-8 md:py-12 mb-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 md:gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">How It Works</h2>
          <p className="text-gray-500 text-lg">
            Four simple steps to accelerate your career growth
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((work, index) => {
            return (
              <div
                key={index}
                className="p-4 transition hover:border-primary bg-background/50"
              >
                <div className="">
                  <div className="flex items-center flex-col">
                    <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center">
                      {work.icon}
                    </div>
                    <h3 className="text-xl font-semibold my-2">{work.title}</h3>
                  </div>
                  <p className="text-gray-500">{work.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
