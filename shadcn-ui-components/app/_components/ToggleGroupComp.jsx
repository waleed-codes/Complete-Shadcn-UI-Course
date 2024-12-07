import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ToggleGroupComp = () => {
  return (
    <div>
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ToggleGroupComp;
