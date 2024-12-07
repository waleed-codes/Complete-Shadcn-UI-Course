import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const ScrollAreaComp = () => {
  return (
    <div>
      <ScrollArea className="w-96 h-52 whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          <div className="">
            <p>
              {" "}
              Jokester began sneaking into the castle in the middle of the night
              and leaving jokes all over the place: under the king's pillow, in
              his soup, even in the royal toilet. The king was furious, but he
              couldn't seem to stop Jokester. And then, one day, the people of
              the kingdom discovered that the jokes left by Jokester were so
              funny that they couldn't help but laugh. And once they started
              laughing, they couldn't stop.
            </p>
          </div>
          <div className="">
            <p>
              {" "}
              Jokester began sneaking into the castle in the middle of the night
              and leaving jokes all over the place: under the king's pillow, in
              his soup, even in the royal toilet. The king was furious, but he
              couldn't seem to stop Jokester. And then, one day, the people of
              the kingdom discovered that the jokes left by Jokester were so
              funny that they couldn't help but laugh. And once they started
              laughing, they couldn't stop.
            </p>
          </div>
          <div className="">
            <p>
              {" "}
              Jokester began sneaking into the castle in the middle of the night
              and leaving jokes all over the place: under the king's pillow, in
              his soup, even in the royal toilet. The king was furious, but he
              couldn't seem to stop Jokester. And then, one day, the people of
              the kingdom discovered that the jokes left by Jokester were so
              funny that they couldn't help but laugh. And once they started
              laughing, they couldn't stop.
            </p>
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default ScrollAreaComp;
