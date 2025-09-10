import type { WorkflowStep } from "@/types/onboardingWorkflowSteps";

export const workflowStepData: WorkflowStep[] = [
  {
    step: "Client Information",
    description: "Collecting client's basic information.",
    completed: true,
  },
  {
    step: "IDV & Credit Check",
    description: "Verifying identity and running credit checks.",
    completed: true,
  },
  {
    step: "Document Upload",
    description: "Upload necessary supporting documents.",
    completed: true,
  },
  {
    step: "AI Validation",
    description: "Validating data with AI-based algorithms.",
    completed: false,
  },
  {
    step: "Credit Committee",
    description: "Reviewing the client's eligibility.",
    completed: false,
  },
  {
    step: "Approval & Docs",
    description: "Final approval and document signing.",
    completed: false,
  },
  {
    step: "Funder Syndication",
    description: "Distributing funds to the client.",
    completed: false,
  },
];
