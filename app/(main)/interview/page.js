import { getAssesments } from "@/actions/interview";
import React from "react";
import StatsCards from "./_components/Stats";
import PerformanceChart from "./_components/Performance";
import QuizList from "./_components/QuizList";

const InterviewPage = async () => {
  const assesments = await getAssesments();

  return (
    <div className="space-y-6">
      <h1 className="gradient-title font-bold text-5xl md:text-6xl mb-4">
        Interview Preparation
      </h1>
      <StatsCards assessments={assesments} />
      <PerformanceChart assessments={assesments} />
      <QuizList assessments={assesments} />
    </div>
  );
};

export default InterviewPage;
