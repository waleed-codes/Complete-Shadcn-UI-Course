import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, User } from "lucide-react";

const AlertComponent = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-10">
        <Alert>
          <User className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos, ducimus!
            </p>
          </AlertDescription>
        </Alert>{" "}
        <Alert variant="waleed">
          <User className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>{" "}
        <Alert variant="destructive">
          <User className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>
    </>
  );
};

export default AlertComponent;
