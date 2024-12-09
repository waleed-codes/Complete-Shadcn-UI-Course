import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CardComponents = () => {
  return (
    <div className="p-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-[#334155]">Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            suscipit eos facere fugiat illum in dolores optio, voluptate illo
            nobis voluptates amet error dicta modi accusantium commodi
            architecto nemo. Natus quibusdam temporibus delectus. Minima
            corrupti accusantium commodi, praesentium inventore quaerat quis
            adipisci autem est! Sint beatae quaerat voluptates ea iusto.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full"> Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardComponents;
