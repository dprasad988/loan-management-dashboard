import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Toggle } from "../ui/toggle";
import { useState } from "react";

const Asistant = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleChange = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <>
      <Card className="mt-2">
        <CardHeader className="flex lg:flex-row md:flex-col justify-between items-center">
          <CardTitle className="text-lg">AI Asistant</CardTitle>
          <Toggle
            aria-label="Toggle Option"
            onClick={handleToggleChange}
            variant={isToggled ? "default" : "outline"}
          >
            {isToggled ? "Active" : "Inactive"}
          </Toggle>
        </CardHeader>

        <CardContent className="-mt-4 flex justify-between"></CardContent>
      </Card>
    </>
  );
};

export default Asistant;
