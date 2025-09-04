import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const NewCoverLetter = () => {
  return (
    <div className="py-6">
      <div className="space-y-6">
        <Link href="/Ai-cover-letter">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>
        <div>
          <h1 className="font-bold gradient-title text-5xl md:text-6xl">
            Create Cover Letter
          </h1>
          <p className="text-muted-foreground">
            Generate a tailored cover letter for your job application
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewCoverLetter;
