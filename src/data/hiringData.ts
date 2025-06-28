
export interface TechTask {
  taskName: string;
  platform: string;
  duration: string;
  description: string;
  link?: string;
}

export interface ProcessStage {
  stageName: string;
  description: string;
  expectedDuration: string;
  format: string;
  techTask?: TechTask;
}

export interface HiringEntry {
  id: string;
  company: string;
  role: string;
  overview: string;
  process: ProcessStage[];
}

export const hiringData: HiringEntry[] = [
  {
    id: "lead-forensics-senior-software-engineer",
    company: "Lead Forensics",
    role: "Senior Software Engineer",
    overview: "From multiple candidates and research, it seems Lead Forensics looks for engineers who can solve real-world problems and drive their product forward. Based on candidate experiences, here's what to expect when applying as a Senior Software Engineer.",
    process: [
      {
        stageName: "Intro Call",
        description: "A 30-minute video call with HR to review your background, discuss the role, and answer any initial questions.",
        expectedDuration: "30 minutes",
        format: "Video call"
      },
      {
        stageName: "Technical Assessment",
        description: "An online coding challenge to evaluate your problem-solving and coding style.",
        expectedDuration: "2 hours", 
        format: "Coderbyte online test",
        techTask: {
          taskName: "Password Validation Challenge",
          platform: "Coderbyte",
          duration: "2 hours",
          description: "Implement functions to validate password strength according to given rules (length, character sets, banned substrings).",
          link: "https://coderbyte.com/challenges/password-validation"
        }
      },
      {
        stageName: "Final Interview",
        description: "A 60-minute conversation with the CEO focusing on leadership, culture fit, and your vision for the role. They will also ask technical questions about production deployments (dev to prod environment processes), production changes and feature flags usage, logging and monitoring with tools like Grafana, Prometheus, and CloudWatch. You'll also be asked to walk through and explain your code from the Coderbyte challenge.",
        expectedDuration: "45–60 minutes",
        format: "Video call"
      }
    ]
  }
];
