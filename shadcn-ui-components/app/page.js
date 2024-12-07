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
import { DatePickerComponent } from "./_components/DatePickerComponent";
import DialogComponent from "./_components/DialogComponent";
import DrawerComponent from "./_components/DrawerComponent";
import DropdownMenuComp from "./_components/DropdownMenuComp";
import HoverCardComp from "./_components/HoverCardComp";
import PopoverComponent from "./_components/PopoverComponent";
import InputOTPComp from "./_components/InputOTPComp";
import InputComp from "./_components/InputComp";
import { LabelComp } from "./_components/LabelComp";
import MenubarComp from "./_components/MenubarComp";
import NavigationMenuComp from "./_components/NavigationMenuComp";
import { PaginationComp } from "./_components/PaginationComp";
import { ProgressComp } from "./_components/ProgressComp";
import RadioGroupComp from "./_components/RadioGroupComp";
import { ResizableComp } from "./_components/ResizableComp";
import ScrollAreaComp from "./_components/ScrollAreaComp";
import SelectComp from "./_components/SelectComp";

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
        <DatePickerComponent />
        <DialogComponent />
        <DrawerComponent />
        <DropdownMenuComp />
        <HoverCardComp />
        <InputComp />
        <InputOTPComp />
        <LabelComp />
        <MenubarComp />
        <NavigationMenuComp />
        <PaginationComp />
        <ProgressComp />
        <RadioGroupComp />
        <ResizableComp />
        <ScrollAreaComp />
        <SelectComp />
      </div>
    </>
  );
}
