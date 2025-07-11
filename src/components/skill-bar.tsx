'use client';
import { Progress } from "@/components/ui/progress";
import React, { useEffect, useState } from "react";

interface SkillBarProps {
  skill: string;
  level: number;
}

export default function SkillBar({ skill, level }: SkillBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(level), 100);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-foreground">{skill}</span>
        <span className="text-sm font-medium text-primary">{level}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}
