import React from "react";
import ResumeBuilder from "./_components/ResumeBuilder";
import { getResume } from "@/actions/resume";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const page = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding");
  }

  const resume = await getResume();

  return (
    <div className="space-y-6">
      <ResumeBuilder initialContent={resume?.content} />
    </div>
  );
};

export default page;
