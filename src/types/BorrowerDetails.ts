export interface BorrowerDetails {
    name: string;
    email?: string;
    phone?: string;
    loanType: string;
    amount: string;
    status: "New" | "In Review" | "Renew";
}