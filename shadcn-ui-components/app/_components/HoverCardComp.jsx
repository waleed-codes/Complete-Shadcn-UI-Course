import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import ProductDetail from "./ProductDetail";

const HoverCardComp = () => {
  return (
    <div className="p-10">
      <HoverCard>
        <HoverCardTrigger>
          <Button>Hover Card Component</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <ProductDetail />
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default HoverCardComp;
