"use client";
import { useEffect } from "react";
import type { CardComponentProps } from "onborda";
import { useOnborda } from "onborda";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const OnbordaCard: React.FC<CardComponentProps> = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  arrow,
}) => {

  const { closeOnborda, startOnborda } = useOnborda();
  return (
    <Card className="border-0 rounded-3xl max-w-vw min-w-96">
      <CardHeader>
        <div className="flex items-start justify-between w-full">
          <div>
            <CardTitle className="mb-2 text-lg">
              {step.icon} {step.title}
            </CardTitle>
            <CardDescription>
              {currentStep + 1} of {totalSteps}
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={() => closeOnborda()}>
            <XIcon size={16} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>{step.content}</CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          {currentStep !== 0 && (
            <Button onClick={() => prevStep()}>Previous</Button>
          )}
          {currentStep + 1 !== totalSteps && (
            <Button onClick={() => nextStep()} className="ml-auto">
              Next
            </Button>
          )}
          {currentStep + 1 === totalSteps && (
            <Button onClick={() => closeOnborda()} className="ml-auto">
              🎉 Finish!
            </Button>
          )}
        </div>
      </CardFooter>
      <span className="text-card">{arrow}</span>
    </Card>
  );
};

export default OnbordaCard;