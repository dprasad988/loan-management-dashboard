import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { workflowStepData } from "@/data/onboardingWorkflowSteps";
import { CheckCircle } from "lucide-react";

const OnboardingWorkflow: React.FC = () => {
  return (
    <>
      <Card className="mt-2">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-lg">Onboarding Workflow</CardTitle>
        </CardHeader>

        <CardContent className="flex justify-between">
          <ul className="space-y-2">
            {workflowStepData.map((step, index) => (
              <li key={index} className="flex items-center space-x-3">
                {!step.completed && <span className="text-sm px-1 flex">{index + 1}.</span>}
                {step.completed && (
                  <CheckCircle className="text-green-500" size={20} />
                )}
                <p className="text-sm">{step.step}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};

export default OnboardingWorkflow;
