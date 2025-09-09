import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Target, Trophy } from "lucide-react";
import React from "react";

const StatsCards = ({ assessments }) => {
  const getAverageScore = () => {
    if (!assessments?.length) return 0;
    const total = assessments.reduce(
      (sum, assessment) => sum + assessment.quizScore,
      0
    );
    return (total / assessments.length).toFixed(1);
  };

  const getLatestAssessment = () => {
    if (!assessments?.length) return null;
    return assessments[assessments.length - 1];
  };

  const getTotalQuestions = () => {
    if (!assessments?.length) return 0;
    return assessments.reduce(
      (sum, assessment) => sum + assessment.questions.length,
      0
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <Card className={"gap-0 bg-background "}>
        <CardHeader
          className={
            "flex flex-row items-center justify-between space-y-0 pb-2"
          }
        >
          <CardTitle className={"flex justify-between items-center"}>
            Average Score
          </CardTitle>
          <Trophy className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{getAverageScore()}%</div>
          <p className="text-xs text-muted-foreground">
            Across all assessments
          </p>
        </CardContent>
      </Card>

      <Card className={"gap-0 bg-background "}>
        <CardHeader
          className={
            "flex flex-row items-center justify-between space-y-0 pb-2"
          }
        >
          <CardTitle className={"flex justify-between items-center"}>
            Questions Practiced
          </CardTitle>
          <Brain className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{getTotalQuestions()}</div>
          <p className="text-xs text-muted-foreground">Total questions</p>
        </CardContent>
      </Card>

      <Card className={"gap-0 bg-background "}>
        <CardHeader
          className={
            "flex flex-row items-center justify-between space-y-0 pb-2"
          }
        >
          <CardTitle className={"flex justify-between items-center"}>
            Latest Score
          </CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {getLatestAssessment()?.quizScore.toFixed(1) || 0}%
          </div>
          <p className="text-xs text-muted-foreground">Most recent quiz</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
