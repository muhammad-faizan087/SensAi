"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import QuizResult from "./QuizResult";

const QuizList = ({ assessments }) => {
  const router = useRouter();

  const [selectedQuiz, setselectedQuiz] = useState();

  return (
    <div>
      <Card className={"bg-background"}>
        <CardHeader
          className={"flex flex-row items-center justify-between w-full"}
        >
          <div>
            <CardTitle
              className={"gradient-title font-bold text-3xl md:text-4xl"}
            >
              Recent Quizzes
            </CardTitle>
            <CardDescription>Review your past quiz performance</CardDescription>
          </div>
          <div>
            <Button onClick={() => router.push("/interview/mock")}>
              Start New Quiz
            </Button>
          </div>
        </CardHeader>
        <CardContent className={"space-y-4"}>
          {assessments?.map((assessment, i) => {
            return (
              <Card
                key={i}
                className={
                  "bg-background hover:bg-muted/50 transition-colors cursor-pointer"
                }
                onClick={() => {
                  setselectedQuiz(assessment);
                }}
              >
                <CardHeader
                  className={
                    "flex flex-row items-center justify-between w-full"
                  }
                >
                  <div>
                    <CardTitle className={"gradient-title text-2xl"}>
                      Quiz {i + 1}
                    </CardTitle>
                    <CardDescription>
                      Score: {assessment?.quizScore.toFixed(1)}%
                    </CardDescription>
                  </div>
                  <div>
                    {format(
                      new Date(assessment.createdAt),
                      "MMMM dd, yyyy HH:mm"
                    )}
                  </div>
                </CardHeader>
                {assessment.improvementTip && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {assessment.improvementTip}
                    </p>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </CardContent>
      </Card>

      <Dialog open={!!selectedQuiz} onOpenChange={() => setselectedQuiz(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <QuizResult
            result={selectedQuiz}
            StartNew={() => router.push("/interview/mock")}
            hideStartNew
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QuizList;
