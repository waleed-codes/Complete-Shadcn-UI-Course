"use client";
import { Button } from "@/components/ui/button";
import Banner from "./_components/Banner";

export default function Home() {
  return (
    <>
      <div className="p-10">
        <Button>Click Me</Button>
        <Banner />
      </div>
    </>
  );
}
