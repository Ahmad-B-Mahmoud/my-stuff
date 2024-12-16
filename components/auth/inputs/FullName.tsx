import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";
import React from "react";

type FullNameArgs = {
  errorFullName: string | undefined;
  defaultValue: any;
};

const FullName = ({ errorFullName, defaultValue }: FullNameArgs) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <div className="relative">
        <Input id="name" name="name" type="text" defaultValue={defaultValue} />
        <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
      </div>
      {errorFullName ? (
        <span className="text-destructive">{errorFullName}</span>
      ) : null}
    </div>
  );
};

export default FullName;
