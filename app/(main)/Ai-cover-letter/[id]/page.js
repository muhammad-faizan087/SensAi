import { getCoverLetter } from "@/actions/cover-letter";
import React from "react";
import CoverLetterPreview from "../_components/CoverLetterPreview";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const page = async ({ params }) => {
  const { id } = await params;
  const coverLetter = await getCoverLetter(id);

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
            {coverLetter?.jobTitle} at {coverLetter?.companyName}
          </h1>
        </div>
        <CoverLetterPreview content={coverLetter?.content} />
      </div>
    </div>
  );
};

export default page;
