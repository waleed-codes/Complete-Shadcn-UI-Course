import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const RadioGroupComp = () => {
  return (
    <div>
      <h1 className="pb-5 font-semibold">RadioGroupComp</h1>
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Odfdsf</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Opdsfsf∂ Two</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default RadioGroupComp;
