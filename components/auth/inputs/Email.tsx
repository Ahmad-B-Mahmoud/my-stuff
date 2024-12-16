import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import React from "react";

type EmailArgs = {
  errorEmail: string | undefined;
  defaultValue: any;
};

const Email = ({ errorEmail, defaultValue }: EmailArgs) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <div className="relative">
        <Input
          id="email"
          name="email"
          type="email"
          defaultValue={defaultValue}
        />
        <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
      </div>
      {errorEmail ? (
        <span className="text-destructive">{errorEmail}</span>
      ) : null}
    </div>
  );
};

export default Email;
