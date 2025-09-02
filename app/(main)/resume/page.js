import React from "react";
import ResumeBuilder from "./_components/ResumeBuilder";
import { getResume } from "@/actions/resume";

const page = async () => {
  const resume = await getResume();

  return (
    <div className="space-y-6">
      <ResumeBuilder initialContent={resume?.content} />
    </div>
  );
};

export default page;
