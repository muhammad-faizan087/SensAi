import React from "react";
import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/data/industries";
import { redirect } from "next/navigation";
import OnBoardingForm from "./_components/Onboarding";

const OnBoadingPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      <OnBoardingForm industries={industries} />
    </main>
  );
};

export default OnBoadingPage;
