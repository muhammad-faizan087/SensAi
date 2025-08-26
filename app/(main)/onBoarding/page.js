import React from "react";
import Onboarding from "./_components/Onboarding";
import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/data/industries";
import { redirect } from "next/navigation";

const OnBoadingPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      <Onboarding industries={industries} />
    </main>
  );
};

export default OnBoadingPage;
