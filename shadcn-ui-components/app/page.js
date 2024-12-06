"use client";

import AccordionComponent from "./_components/AccordionComponent";
import AlertComponent from "./_components/AlertComponent";
import AlertDialogComponent from "./_components/AlertDialogComponent";
import AvatarComponent from "./_components/AvatarComponent";
import BadgeComponent from "./_components/BadgeComponent";
import BreadcrumbComponent from "./_components/breadcrumbcomponent";
import CalendarComponent from "./_components/CalendarComponent";
import CardComponents from "./_components/CardComponents";
import CarouselComponent from "./_components/CarouselComponent";
import { ChartComponent } from "./_components/ChartComponent";
import CheckBoxComponent from "./_components/CheckBoxComponent";
import { CollapsibleComponent } from "./_components/CollapsibleComponent";
import { CommandComponent } from "./_components/CommandComponent";
import ContextmenuComponent from "./_components/ContextmenuComponent";
import PopoverComponent from "./_components/PopoverComponent";

export default function Home() {
  return (
    <>
      <div className="p-10 container mx-auto">
        <AccordionComponent />
        <AlertComponent />
        <AlertDialogComponent />
        <AvatarComponent />
        <BadgeComponent />
        <BreadcrumbComponent />
        <CalendarComponent />
        <CardComponents />
        <CarouselComponent />
        <ChartComponent />
        <CheckBoxComponent />
        <CollapsibleComponent />
        <CommandComponent />
        <ContextmenuComponent />
        <PopoverComponent />
      </div>
    </>
  );
}
