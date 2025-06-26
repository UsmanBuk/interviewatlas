
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
    overview: "At Lead Forensics we look for engineers who can solve real-world problems and drive our product forward. Here's what to expect when applying as a Senior Software Engineer.",
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
        description: "A 60-minute conversation with our CEO focusing on leadership, culture fit, and your vision for the role.",
        expectedDuration: "45–60 minutes",
        format: "Video call"
      }
    ]
  }
];
