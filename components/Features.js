import { features } from "@/data/features";
import React from "react";
import { Card, CardContent } from "./ui/card";

const Features = () => {
  return (
    <section className="text-center px-4 md:px-8 mb-10 md:mb-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 md:gap-8">
        <h2 className="text-3xl font-bold mb-4">
          Powerful Features for Your Career Growth
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            return (
              <Card
                key={index}
                className="p-4 transition hover:border-primary bg-background/50"
              >
                <CardContent>
                  <div className="flex items-center flex-col mb-2">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-500">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
