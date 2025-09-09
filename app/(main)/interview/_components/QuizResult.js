import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Cross, Trophy, XCircle } from "lucide-react";
import React from "react";

const QuizResult = ({ result, StartNew, hideStartNew = false }) => {
  if (!result) return null;
  return (
    <div className="mx-auto space-y-6">
      <div className="flex justify-start items-center space-x-2">
        <Trophy className="h-6 w-6 text-yellow-500" />
        <h1 className="text-3xl font-bold gradient-title">Quiz Result</h1>
      </div>
      <div className="text-center space-y-2">
        <div className="flex justify-center items-center">
          {result.quizScore.toFixed(1)}%
        </div>
        <Progress value={result.quizScore} className={"w-full"} />
      </div>
      {result.improvementTip && (
        <div className="bg-muted p-4 rounded-lg">
          <p className="font-medium">Improvement Tip:</p>
          <p className="text-muted-foreground">{result.improvementTip}</p>
        </div>
      )}
      <div className="space-y-4">
        <h3>Questions Review</h3>
        {result.questions.map((q, index) => {
          return (
            <div className="w-full rounded-lg p-4 border space-y-2" key={index}>
              <div className="flex justify-between items-center gap-2">
                <p className="font-medium">{q.question}</p>
                {q.isCorrect ? (
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Your Answer:<span>{q.userAnswer}</span>
              </p>
              <div className="text-sm bg-muted p-2 rounded">
                <p className="font-medium">Explanation:</p>
                <p>{q.explanation}</p>
              </div>
            </div>
          );
        })}
      </div>
      {!hideStartNew && (
        <Button onClick={StartNew} className={"w-full"}>
          Start New Quiz
        </Button>
      )}
    </div>
  );
};

export default QuizResult;
