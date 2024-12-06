import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import ProductDetail from "./ProductDetail";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PopoverComponent = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
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
          <Popover>
            <PopoverTrigger asChild>
              <Button>Quick View</Button>
            </PopoverTrigger>
            <PopoverContent>
              <ProductDetail card/>
            </PopoverContent>
          </Popover>
        </CardFooter>
      </Card>

      {/* ************************************ */}
    </>
  );
};

export default PopoverComponent;
