import SideCard from "@/components/auth/SideCard";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
        <SideCard />

        {children}
      </div>
    </div>
  );
};

export default layout;
