import React from "react";
import { sampleBorrowers } from "@/data/borrowerData";
import Header from "./Header";

const BorrowerDetails: React.FC = () => {
  return (
    <>
      {sampleBorrowers
        .filter((borrower) => borrower.status === "In Review")
        .map((borrower, index) => (
          <Header
            key={index}
            name={borrower.name}
            email={borrower.email}
            phone={borrower.phone}
            loanType={borrower.loanType}
            amount={borrower.amount}
            status={borrower.status}
          />
        ))}
    </>
  );
};

export default BorrowerDetails;
