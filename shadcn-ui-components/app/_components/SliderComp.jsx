import React from "react";
import { Slider } from "@/components/ui/slider";

const SliderComp = () => {
  return (
    <div>
      {/* The Slider component allows users to select a value from a specified range. 
          Here, we set the default value to 33, meaning the slider will start at this position. 
          The maximum value is set to 100, indicating the highest point the slider can reach. 
          The step value of 1 allows the slider to move in increments of 1, providing fine control over the selection. */}
      <Slider defaultValue={[33]} max={100} step={1} />
    </div>
  );
};

export default SliderComp;
