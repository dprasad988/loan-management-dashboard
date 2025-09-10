import { sampleBrokers } from "@/data/brokerData";
import React from "react";
import HeaderCard from "./HeaderCard";
import OnboardingWorkflow from "./OnboardingWorkflow";
import Asistant from "./AI-Asistant";

const BrokerOverview: React.FC = () => {
  return (
    <>
      {sampleBrokers.map((broker, index) => (
        <HeaderCard key={index} name={broker.name} stats={broker.stats} />
      ))}

      <OnboardingWorkflow/>
      <Asistant/>
    </>
  );
};

export default BrokerOverview;
