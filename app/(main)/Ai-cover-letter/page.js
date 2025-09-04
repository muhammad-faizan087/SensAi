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
        {cover_letters?.length > 0 ? (
          <div>
            {cover_letters.map((letter) => {
              return (
                <Card key={letter.id}>
                  <CardHeader>
                    <CardTitle className={"font-medium text-lg"}>
                      {letter.jobTitle} at {letter.companyName}
                    </CardTitle>
                    <CardDescription>
                      Created {format(new Date(letter.createdAt), "PPP")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground flex items-center justify-start">
                      {letter.jobDescription}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>No Cover Letters Yet</CardTitle>
              <CardDescription>
                Create your first cover letter to get started
              </CardDescription>
            </CardHeader>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AiCoverLetterPage;
