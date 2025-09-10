import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { BrokerInfo } from "@/types/BrokerInfo";
import { Mail, MessageSquare, Phone, User } from "lucide-react";
import { Button } from "../ui/button";

const HeaderCard: React.FC<BrokerInfo> = ({ name, stats }) => {
  return (
    <>
      <Card className="">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-lg flex items-center space-x-2">
            <User size={20} className="text-gray-600" />
            <span>Broker Overview</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="">
          <div className="flex flex-col items-center ">
            <h2 className="lg:text-2xl text-2xl font-bold md:text-sm">{name}</h2>
          </div>

          <div className="flex space-x-4 mt-5 justify-between lg:flex-nowrap md:flex-wrap md:items-center md:space-y-1 md:justify-center">
            <div className="flex flex-col items-center space-x-2">
              <h1 className="text-2xl font-bold">{stats.deals}</h1>
              <p className="text-sm">Deals</p>
            </div>

            <div className="flex flex-col items-center space-x-2">
              <h2 className="text-2xl font-bold">{stats.approvalRate}</h2>
              <p className="text-sm">Approval Rate</p>
            </div>

            <div className="flex flex-col items-center space-x-2 justify-center">
              <h1 className="text-2xl font-bold">{stats.pending}</h1>
              <p className="text-sm">Pending</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 lg:space-x-2 space-y-2 justify-between mt-5">
              <Button>
                <Phone size={16} /> 
                <span>Call</span>
              </Button>

              <Button>
                <Mail size={16} /> 
                <span>Email</span>
              </Button>

              <Button>
                <MessageSquare size={16} /> 
                <span>Chat</span>
              </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default HeaderCard;
