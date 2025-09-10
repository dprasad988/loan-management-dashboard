import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { AlertCircle, AlertTriangle, Brain, ChevronDown } from "lucide-react";
import { colors } from "@/styles/colors";

const AISection: React.FC = () => {
  return (
    <>
      <Card className="mt-3">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-lg flex items-center space-x-2">
            <Brain size={20} className="text-gray-600" />
            <span>AI Explainability</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="risk-flags">
              <AccordionTrigger
                className="flex items-center space-x-2 px-4"
                style={{ backgroundColor: colors.dark }}
              >
                <AlertTriangle size={20} className="text-red-500" />
                <span style={{ color: colors.lightText }}>
                  Risk Flags Detected (2)
                </span>
              </AccordionTrigger>

              <AccordionContent>
                <Card
                  style={{ backgroundColor: colors.lightRed }}
                  className="mb-2 mt-2 h-10 p-2 justify-content-center rounded-sm"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertCircle 
                        size={20} 
                        style={{ color: colors.warningRed }}
                      />
                      <span style={{ color: colors.warningRed }}>
                        Income Inconsistency
                      </span>
                    </CardTitle>
                  </CardHeader>
                </Card>

                <Card
                  className="h-10 p-2 justify-content-center rounded-sm"
                  style={{ backgroundColor: colors.lightRed }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertCircle
                        size={20}
                        style={{ color: colors.warningRed }}
                      />
                      <span style={{ color: colors.warningRed }}>
                        High Debt-to-Income Ratio
                      </span>
                    </CardTitle>
                  </CardHeader>
                </Card>
                <hr className="mt-5 border-t-2 border-gray-300" />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>

        <CardFooter className="grid grid-col lg:grid-cols-3 gap-2">
          <Button className="h-7 px-3 bg-transparent text-blue-500 border border-blue-500 ">
            Request Documents
          </Button>
          <Button className="h-7 px-3">Send to Valuer</Button>
          <Button className="h-7 px-3">Approve</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default AISection;
