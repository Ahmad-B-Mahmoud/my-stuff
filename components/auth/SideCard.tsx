import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const SideCard = () => {
  return (
    <Card className="md:w-1/2 bg-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground sm:rounded-r-none">
      <CardContent className="flex flex-col items-center justify-center h-full p-6">
        <div className="relative w-full h-80 mb-6">
          <Image
            src="/web-app-manifest-512x512.png"
            alt="App Logo"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
        <CardTitle className="text-2xl font-bold mb-2">
          Welcome to Our Platform
        </CardTitle>
        <CardDescription className="text-center text-gray-400 dark:text-gray-300">
          Discover amazing features and boost your productivity with our
          cutting-edge tools.
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default SideCard;
