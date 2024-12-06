"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressComp() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer1 = setTimeout(() => setProgress(33), 1000); // First update after 1 second
    const timer2 = setTimeout(() => setProgress(66), 2000); // Second update after 2 seconds
    const timer3 = setTimeout(() => setProgress(100), 3000); // Final update after 3 seconds
    return () => {
      clearTimeout(timer1, timer2, timer3);
    };
  }, []);

  return (
    <>
      <div className="py-10">
        <h1>Progress bar</h1>
        <Progress value={progress} />
      </div>
    </>
  );
}
