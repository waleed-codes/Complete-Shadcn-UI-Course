import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardComponents from "./CardComponents";

const CarouselComponent = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <CardComponents />
          </CarouselItem>
          <CarouselItem>
            <CardComponents />
          </CarouselItem>
          <CarouselItem>
            <CardComponents />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="md:hidden sm:block" />
        <CarouselNext className="md:hidden sm:block" />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
