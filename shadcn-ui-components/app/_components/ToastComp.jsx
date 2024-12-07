import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import React from "react";

const ToastComp = () => {
  const { toast } = useToast();
  return (
    <div>
      <h1>Toast Comp</h1>
      <Button
        onClick={() => {
          toast({
            variant: "purple",
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }}
      >
        Click me
      </Button>
    </div>
  );
};

export default ToastComp;
