import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { workflowStepData } from "@/data/onboardingWorkflowSteps";
import { CheckCircle } from "lucide-react";
import { colors } from "@/styles/colors";

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
                {!step.completed && (
                  <span
                    className="text-sm px-1 flex"
                    style={{ color: colors.gray }}
                  >
                    {index + 1}.
                  </span>
                )}
                {step.completed && (
                  <CheckCircle style={{color: colors.green}} size={20} />
                )}
                <p
                  className="text-sm"
                  style={{ color: !step.completed ? colors.gray : colors.primaryText }}
                >
                  {step.step}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};

export default OnboardingWorkflow;
