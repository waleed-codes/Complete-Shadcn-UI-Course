"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import CardComponents from "./CardComponents";
import { DatePickerComponent } from "./DatePickerComponent";
import { Button } from "@/components/ui/button";

const NavigationMenuComp = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Button>Home</Button>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col gap-3 p-4">
              <NavigationMenuLink>Link</NavigationMenuLink>
              <NavigationMenuLink>Link</NavigationMenuLink>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col gap-3 p-4">
              <DatePickerComponent />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationMenuComp;
