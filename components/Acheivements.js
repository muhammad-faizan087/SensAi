import React from "react";

const Acheivements = () => {
  return (
    <section className="text-center px-4 md:px-8 my-8 md:my-12 bg-muted/50 py-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 md:gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold text-primary">50+</h3>
            <p className="text-gray-500">Industries Covered</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold text-primary">1000+</h3>
            <p className="text-gray-500">Interview Questions</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold text-primary">95%</h3>
            <p className="text-gray-500">Success Rate</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold text-primary">24/7</h3>
            <p className="text-gray-500">AI Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acheivements;
