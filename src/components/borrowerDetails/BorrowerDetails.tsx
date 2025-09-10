import React from "react";
import { sampleBorrowers } from "@/data/borrowerData";
import Header from "./Header";
import AISection from "./AISection";
import { loanSummaryData } from "@/data/loanSummaryData";
import LoanSummary from "./LoanSummary";

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

        <AISection/>
        {
            loanSummaryData.map((data, index) => (
                <LoanSummary 
                    key={index}
                    employment={data.employment}
                    existingLoan={data.existingLoan}
                    creditScore={data.creditScore}
                    sourceOfFunds={data.sourceOfFunds}
                />
            ))
        }
    </>
  );
};

export default BorrowerDetails;
