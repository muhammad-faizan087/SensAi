"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import CoverLetterPreview from "./CoverLetterPreview";
import { useState } from "react";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const LettersList = ({ letters }) => {
  const [selectedLetter, setselectedLetter] = useState();

  return (
    <div>
      {letters?.length > 0 ? (
        <div className="space-y-4">
          {letters.map((letter) => {
            return (
              <Card
                key={letter.id}
                onClick={() => {
                  setselectedLetter(letter);
                }}
                className={"bg-transparent hover:bg-muted/50"}
              >
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
                    {letter.jobTitle}
                  </div>
                </CardContent>
              </Card>
            );
          })}

          <Dialog
            open={!!selectedLetter}
            onOpenChange={() => setselectedLetter(null)}
            // onOpenChange={(open) => {
            //   if (!open) {
            //     setselectedLetter(null);
            //     document.body.style.overflowY = "auto";
            //   }
            // }}
          >
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  <div className="font-bold gradient-title text-5xl md:text-6xl">
                    {selectedLetter?.jobTitle} at {selectedLetter?.companyName}
                  </div>
                </DialogTitle>
              </DialogHeader>
              <CoverLetterPreview content={selectedLetter?.content || ""} />
            </DialogContent>
          </Dialog>
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
  );
};

export default LettersList;
