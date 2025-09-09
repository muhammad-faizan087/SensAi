"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { format, formatDistanceToNow } from "date-fns";
import {
  Brain,
  Briefcase,
  LineChart,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashBoardComponent = ({ insights }) => {
  const salaryData = insights.salaryRanges.map((range) => {
    return {
      name: range.role,
      min: range.min,
      max: range.max,
      median: range.median,
    };
  });

  const getDemandLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook.toLowerCase()) {
      case "positive":
        return { icon: TrendingUp, color: "text-green-500" };
      case "neutral":
        return { icon: LineChart, color: "text-yellow-500" };
      case "negative":
        return { icon: TrendingDown, color: "text-red-500" };
      default:
        return { icon: LineChart, color: "text-gray-500" };
    }
  };

  const OutlookColor = getMarketOutlookInfo(insights.marketOutlook).color;
  const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;

  // Format dates using date-fns
  const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
  const nextUpdateDistance = formatDistanceToNow(
    new Date(insights.nextUpdate),
    { addSuffix: true }
  );

  return (
    <div className="space-y-6">
      <h1 className="gradient-title font-bold text-6xl mb-4">
        Industry Insights
      </h1>
      <Badge variant="outline">Last updated: {lastUpdatedDate}</Badge>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <Card className={"gap-0 bg-background "}>
          <CardHeader>
            <CardTitle className={"flex justify-between items-center"}>
              <span>Market Outlook</span>
              <OutlookIcon className={`${OutlookColor}`} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {insights.marketOutlook.toUpperCase()}
            </div>
            <p className="text-xs text-muted-foreground">
              Next Update {nextUpdateDistance}
            </p>
          </CardContent>
        </Card>

        <Card className={"gap-0 bg-background "}>
          <CardHeader>
            <CardTitle className={"flex justify-between items-center"}>
              <span>Growth Rate</span>
              <TrendingUp className={`text-green-500`} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {insights.growthRate.toFixed(1)}%
            </div>
            <Progress
              value={insights.growthRate.toFixed(1)}
              className="w-full h-2 mt-2"
            />
          </CardContent>
        </Card>

        <Card className={"gap-0 bg-background "}>
          <CardHeader>
            <CardTitle className={"flex justify-between items-center"}>
              <span>Demand Level</span>
              <Briefcase className="text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {insights.demandLevel.toUpperCase()}
            </div>
            <div
              className={`w-full h-2 mt-2 rounded-lg ${getDemandLevelColor(
                insights.demandLevel
              )}`}
            ></div>
          </CardContent>
        </Card>

        <Card className={"gap-0 bg-background "}>
          <CardHeader>
            <CardTitle className={"flex justify-between items-center mb-4"}>
              <span>Top Skills</span>
              <Brain className="text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1">
              {insights.topSkills.map((skill) => {
                return (
                  <Badge variant={"secondary"} key={skill}>
                    {skill}
                  </Badge>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Salary Ranges by Role</CardTitle>
          <CardDescription>
            Displaying minimum, median, and maximum salaries (in thousands)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] sm:h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salaryData} margin={{ bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 10 }}
                  interval={0}
                  angle={-30}
                  textAnchor="end"
                />
                <YAxis />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background border rounded-lg p-2 shadow-md">
                          <p className="font-medium">{label}</p>
                          {payload.map((item) => (
                            <p key={item.name} className="text-sm">
                              {item.name}: ${item.value}K
                            </p>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="min" fill="#94a3b8" name="Min Salary (K)" />
                <Bar dataKey="median" fill="#64748b" name="Median Salary (K)" />
                <Bar dataKey="max" fill="#475569" name="Max Salary (K)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Card className="bg-background">
          <CardHeader>
            <CardTitle>Key Industry Trends</CardTitle>
            <CardDescription>
              Current trends shaping the industry
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {insights.keyTrends.map((trend, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center justify-start space-x-2"
                  >
                    <div className="h-2 w-2 rounded-lg bg-white"></div>
                    <span>{trend}</span>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-background">
          <CardHeader>
            <CardTitle>Recommended Skills</CardTitle>
            <CardDescription>Skills to consider developing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1">
              {insights.recommendedSkills.map((skill) => {
                return (
                  <Badge variant={"secondary"} key={skill}>
                    {skill}
                  </Badge>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashBoardComponent;
