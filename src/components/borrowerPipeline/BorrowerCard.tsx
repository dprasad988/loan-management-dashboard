import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import type { BorrowerDetails } from "@/types/BorrowerDetails";
import { Button } from "../ui/button";

const BorrowerCard: React.FC<BorrowerDetails> = ({
    name,
    loanType,
    amount,
    status,
}) => {
  return (
    <>
      <div>
        <Card className="">
          <CardHeader className="flex lg:flex-row sm:flex-col justify-between items-center">
            <CardTitle className="text-lg sm:text-sm">{name}</CardTitle>
            <Button className="h-6 px-3">{status}</Button>
          </CardHeader>

          <CardContent className="-mt-4">
            <div>
              <p className="sm:text-sm">{loanType}</p>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end text-2xl -mt-5">
            <p className="lg:text-lg sm:text-sm">Rs. {amount}</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default BorrowerCard;
