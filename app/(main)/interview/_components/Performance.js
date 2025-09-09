"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PerformanceChart = ({ assessments }) => {
  const [chartData, setchartData] = useState([]);

  useEffect(() => {
    if (assessments) {
      const formattedData = assessments.map((assessment) => {
        return {
          date: format(new Date(assessment.createdAt), "MMM dd"),

          score: assessment.quizScore,
        };
      });
      console.log("Formatted Chart Data:", formattedData);
      setchartData(formattedData);
    }
  }, [assessments]);

  return (
    <div className="">
      <Card className={"gap-0 bg-background space-y-4"}>
        <CardHeader>
          <CardTitle
            className={"text-3xl md:text-4xl gradient-title font-bold"}
          >
            Performance Trend
          </CardTitle>
          <CardDescription>Your quiz scores over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 100]} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload?.length) {
                      return (
                        <div className="bg-background border rounded-lg p-2 shadow-md">
                          <p className="text-sm font-medium">
                            Score: {payload[0].value}%
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {payload[0].payload.date}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                {console.log("Chart Data in render:", chartData)}
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#0168a9"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceChart;
