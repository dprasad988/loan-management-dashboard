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
import { colors } from "@/styles/colors";

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
                <Briefcase size={18} style={{ color: colors.gray }}/>
                <div className="flex justify-between w-full items-center">
                  <p
                    className="font-semibold text-sm w-1/3"
                    style={{ color: colors.gray }}
                  >
                    Employment:{" "}
                  </p>
                  <p className="w-2/3 text-right">{employment}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard size={18} style={{ color: colors.gray }}/>
                <div className="flex justify-between w-full items-center">
                  <p
                    className="font-semibold text-sm w-2/3"
                    style={{ color: colors.gray }}
                  >
                    Existing Loan:
                  </p>
                  <p className="w-2/3 text-right">Rs. {existingLoan}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <BarChart size={18} style={{ color: colors.gray }}/>
                <div className="flex justify-between w-full items-center">
                  <p
                    className="font-semibold text-sm w-2/3"
                    style={{ color: colors.gray }}
                  >
                    Credit Score:{" "}
                  </p>
                  <p className="w-2/3 text-right">{creditScore}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign size={18} style={{ color: colors.gray }}/>
                <div className="flex justify-between w-full items-center">
                  <p
                    className="font-semibold text-sm w-2/3"
                    style={{ color: colors.gray }}
                  >
                    Source of Funds:{" "}
                  </p>
                  <p className="w-2/3 text-right">{sourceOfFunds}</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mt-4 h-20 justify-center" style={{backgroundColor: colors.lightYellow, borderColor: colors.darkYellow}}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle size={20} style={{color: colors.darkYellow}}/>
                <span>Risk Signal</span>
              </CardTitle>
              <p style={{color: colors.darkRed}}>
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
