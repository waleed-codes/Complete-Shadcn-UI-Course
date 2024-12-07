import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardComponents from "./CardComponents";
import ProductDetail from "./ProductDetail";
import CalendarComponent from "./CalendarComponent";

const TabsComp = () => {
  return (
    <div>
      <Tabs defaultValue="CardComponents" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="CardComponents">CardComponents</TabsTrigger>
          <TabsTrigger value="Calendar">Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="CardComponents">
          <CardComponents />
        </TabsContent>

        <TabsContent value="Calendar">
          <CalendarComponent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsComp;
