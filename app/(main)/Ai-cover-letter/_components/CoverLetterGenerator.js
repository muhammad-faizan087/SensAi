"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { coverLetterSchema } from "@/app/lib/schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch-hook";
import { generateCoverLetter } from "@/actions/cover-letter";
import { LetterTextIcon, Loader2, Pen } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CoverLetterGenerator = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(coverLetterSchema),
  });

  const {
    loading: isGenerating,
    data: resultData,
    error: generatingError,
    fn: generateLetterFn,
  } = useFetch(generateCoverLetter);

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await generateLetterFn(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (resultData && !isGenerating) {
      toast.success("Cover Letter Generated Successfully");
      router.push(`/Ai-cover-letter/${resultData.id}`);
    }
    if (generatingError) {
      toast.error("Error generating cover letter");
    }
  }, [isGenerating, resultData, generatingError]);

  return (
    <div>
      <Card className={"bg-transparent"}>
        <CardHeader>
          <CardTitle>Job Details</CardTitle>
          <CardDescription>
            Provide information about the position you're applying for
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 space-y-4">
              <div className="space-y-2 flex flex-col">
                <label htmlFor="jobTitle">Job Title</label>
                <Input
                  id="jobTitle"
                  placeholder="Enter job title"
                  {...register("jobTitle")}
                />
                {errors.jobTitle && (
                  <p className="text-sm text-red-500">
                    {errors.jobTitle.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="companyName">Company Name</label>
                <Input
                  id="companyName"
                  placeholder="Enter company name"
                  {...register("companyName")}
                />
                {errors.companyName && (
                  <p className="text-sm text-red-500">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="jobDescription">Job Description</label>
                <Textarea
                  id="jobDescription"
                  placeholder="Enter job description"
                  className="h-32"
                  {...register("jobDescription")}
                />
                {errors.jobDescription && (
                  <p className="text-sm text-red-500">
                    {errors.jobDescription.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Button
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <div className="flex items-center gap-2">
                    <Loader2 />
                    Generating...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Pen />
                    Generate Cover Letter
                  </div>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoverLetterGenerator;
