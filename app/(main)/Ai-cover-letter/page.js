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

const AiCoverLetterPage = async () => {
  const cover_letters = await getCoverLetters();

  return (
    <div className="py-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center flex-col md:flex-row gap-2">
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
