import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import type { BorrowerDetails } from "@/types/BorrowerDetails";
import { DollarSign, Mail, Phone } from "lucide-react";

const Header: React.FC<BorrowerDetails> = ({
  name,
  email,
  phone,
  amount,
  status,
}) => {
  return (
    <>
      <Card className="">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Button className="h-6 px-3">{status}</Button>
        </CardHeader>

        <CardContent className="-mt-4 flex justify-between">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <Mail size={20} />
              <p>{email}</p>
            </div>

            <div className="flex items-center space-x-2">
              <Phone size={20} />
              <p>{phone}</p>
            </div>

            <div className="flex items-center space-x-2">
              <DollarSign size={20} />
              <p>{amount}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Header;
