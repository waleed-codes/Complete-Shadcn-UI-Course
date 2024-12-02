"use client";

import AccordionComponent from "./_components/AccordionComponent";
import AlertComponent from "./_components/AlertComponent";
import AlertDialogComponent from "./_components/AlertDialogComponent";
import AvatarComponent from "./_components/AvatarComponent";

export default function Home() {
  return (
    <>
      <div className="p-10 container mx-auto">
        <AccordionComponent />
        <AlertComponent />
        <AlertDialogComponent />
        <AvatarComponent />
      </div>
    </>
  );
}
