import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  AlertCircle,
  BarChart,
  Briefcase,
  CreditCard,
  DollarSign,
} from "lucide-react";
import type { LoanSummaryDetails } from "@/types/LoanSummaryDetails";
import { Button } from "../ui/button";

const LoanSummary: React.FC<LoanSummaryDetails> = ({
  employment,
  existingLoan,
  creditScore,
  sourceOfFunds,
}) => {
  return (
    <>
      <Card className="mt-2">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-lg">Loan Summary</CardTitle>
        </CardHeader>

        <CardContent className="-mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Briefcase size={18} />
                <div className="flex justify-between w-full items-center">
                  <p className="font-semibold text-sm w-1/3">Employment: </p>
                  <p className="w-2/3 text-right">{employment}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard size={18} />
                <div className="flex justify-between w-full items-center">
                  <p className="font-semibold text-sm w-2/3">Existing Loan: </p>
                  <p className="w-2/3 text-right">{existingLoan}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <BarChart size={18} />
                <div className="flex justify-between w-full items-center">
                  <p className="font-semibold text-sm w-2/3">Credit Score: </p>
                  <p className="w-2/3 text-right">{creditScore}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign size={18} />
                <div className="flex justify-between w-full items-center">
                  <p className="font-semibold text-sm w-2/3">Source of Funds: </p>
                  <p className="w-2/3 text-right">{sourceOfFunds}</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle size={20} className="text-red-500" />
                <span>Risk Signal</span>
              </CardTitle>
              <p className="text-red-500">
                Missing Source of Funds declaration.
              </p>
            </CardHeader>
          </Card>

          <Button className="h-8 px-3 mt-3 w-full">
            Escalate to Credit Committee
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default LoanSummary;
