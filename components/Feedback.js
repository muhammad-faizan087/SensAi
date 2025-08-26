import { testimonial } from "@/data/testimonials";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Feedback = () => {
  return (
    <section className="text-center px-4 md:px-8 py-8 md:py-12 mb-12 bg-muted/50">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 md:gap-8">
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonial.map((testimonial, index) => {
            return (
              <Card
                key={index}
                className="p-4 transition hover:border-primary bg-background border border-muted"
              >
                <CardContent>
                  <div className="flex items-center justify-left gap-6 mb-4">
                    <Image
                      src={testimonial.image}
                      className="rounded-full object-cover"
                      alt="Author Image"
                      width={40}
                      height={40}
                      priority
                    />
                    <div className="text-left text-white">
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                      <p>{testimonial.company}</p>
                    </div>
                  </div>
                  <div>
                    <blockquote className="relative text-left italic text-gray-500">
                      <span className="absolute -top-4 -left-4 text-3xl text-white">
                        &quot;
                      </span>
                      {testimonial.quote}
                      <span className="absolute -bottom-4 text-3xl text-white">
                        &quot;
                      </span>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
