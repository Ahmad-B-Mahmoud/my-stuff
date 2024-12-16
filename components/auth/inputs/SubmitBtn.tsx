import { Button } from "@/components/ui/button";
import React from "react";

const SubmitBtn = ({
  btnLabel,
  disabled,
}: {
  btnLabel: string;
  disabled: boolean;
}) => {
  return (
    <Button type="submit" className="w-full" disabled={disabled}>
      {btnLabel}
    </Button>
  );
};

export default SubmitBtn;
