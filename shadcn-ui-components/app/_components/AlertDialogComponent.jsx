"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import AccordionComponent from "./AccordionComponent";
import { TrashIcon } from "lucide-react";

const AlertDialogComponent = () => {
  return (
    <>
      <div className="">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Open</Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription asChild>
                <AccordionComponent />
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
              <AlertDialogAction className="w-full"><TrashIcon size={30} /> </AlertDialogAction>
            </AlertDialogFooter>
            
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default AlertDialogComponent;
