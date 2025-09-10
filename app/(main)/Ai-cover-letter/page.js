import { getCoverLetters } from "@/actions/cover-letter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import LettersList from "./_components/LettersList";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const AiCoverLetterPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding");
  }

  const cover_letters = await getCoverLetters();

  return (
    <div className="md:py-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center flex-col md:flex-row gap-4">
          <h1 className="font-bold gradient-title text-5xl md:text-6xl">
            My Cover Letters
          </h1>
          <Link href={"/Ai-cover-letter/new"}>
            <Button className={"flex items-center space-x-2"} type="button">
              <Plus />
              Create New
            </Button>
          </Link>
        </div>
        <LettersList letters={cover_letters} />
      </div>
    </div>
  );
};

export default AiCoverLetterPage;
