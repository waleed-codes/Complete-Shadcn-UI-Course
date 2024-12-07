import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator"


const SelectComp = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup label="Themes">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectGroup>
        <Separator />
        <SelectGroup label="Additional Themes">
          <SelectItem value="ocean">Ocean</SelectItem>
          <SelectItem value="forest">Forest</SelectItem>
          <SelectItem value="desert">Desert</SelectItem>
        </SelectGroup>
      </SelectContent>

    </Select>
  );
};

export default SelectComp;
