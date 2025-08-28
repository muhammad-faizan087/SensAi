import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="pt-24">
      <SignIn />
    </div>
  );
};

export default page;
