import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";

const SonnerComp = () => {
  return (
    <div>
      <h1>SonnerComp</h1>
      <Button onClick={() => toast("SonnerComp")}>Click me</Button>
    </div>
  );
};

export default SonnerComp;
