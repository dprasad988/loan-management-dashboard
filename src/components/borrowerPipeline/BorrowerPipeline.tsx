import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import BorrowerCard from "./BorrowerCard";
import { sampleBorrowers } from "@/data/borrowerData";
import { colors } from "@/styles/colors";

const BorrowerPipeline: React.FC = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Borrower Pipeline</CardTitle>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="new">
            <TabsList 
              className="flex md:flex-col lg:flex-row md:space-y-1 md:mb-8 lg:mb-2 md:mt-2 mb-2 space-x-4 w-full lg:-mt-2"
            >
              <TabsTrigger value="new" className="flex-1 text-center">
                New
              </TabsTrigger>
              <TabsTrigger value="in-review" className="flex-1 text-center">
                In Review
              </TabsTrigger>
              <TabsTrigger value="approved" className="flex-1 text-center">
                Approved
              </TabsTrigger>
            </TabsList>

            <TabsContent value="new">
              {sampleBorrowers
                .filter((borrower) => borrower.status === "New")
                .map((borrower, index) => (
                  <BorrowerCard
                    key={index}
                    name={borrower.name}
                    loanType={borrower.loanType}
                    amount={borrower.amount}
                    status={borrower.status}
                  />
                ))}
            </TabsContent>

            <TabsContent value="in-review">
              {sampleBorrowers
                .filter((borrower) => borrower.status === "In Review")
                .map((borrower, index) => (
                  <BorrowerCard
                    key={index}
                    name={borrower.name}
                    loanType={borrower.loanType}
                    amount={borrower.amount}
                    status={borrower.status}
                  />
                ))}
            </TabsContent>

            <TabsContent value="approved">
              {sampleBorrowers
                .filter((borrower) => borrower.status === "Renew")
                .map((borrower, index) => (
                  <BorrowerCard
                    key={index}
                    name={borrower.name}
                    loanType={borrower.loanType}
                    amount={borrower.amount}
                    status={borrower.status}
                  />
                ))}
            </TabsContent>
          </Tabs>
          <hr 
            className="my-6 border-t-2" 
            style={{ backgroundColor: colors.gray }}
          />
        </CardContent>

        <CardFooter className="-mt-6">
          <div>
            <h3 className="text-sm font-semibold text-uppercase">
              F-SANATISED ACTIVE
            </h3>
            <div className="flex md:flex-col lg:flex-row space-x-4 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="sanitizedStatus"
                  value="active"
                  className="form-radio h-4 w-4"
                  style={{ backgroundColor: colors.blue }}
                />
                <span>Active</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="sanitizedStatus"
                  value="inactive"
                  className="form-radio h-4 w-4"
                  style={{ backgroundColor: colors.blue }}
                />
                <span>Inactive</span>
              </label>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BorrowerPipeline;
