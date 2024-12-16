"use client";
import React from "react";
import Form from "next/form";
import FullName from "./inputs/FullName";
import Email from "./inputs/Email";
import SubmitBtn from "./inputs/SubmitBtn";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const AuthForm = ({ formType }: { formType: "Sign In" | "Sign Up" }) => {
  // Variables:

  const [data, action, isPending] = React.useActionState(
    formValidate,
    undefined
  );

  return (
    <Card className="md:w-1/2 sm:rounded-l-none">
      <CardHeader>
        <CardTitle>{formType}</CardTitle>
        <CardDescription>
          {formType === "Sign Up"
            ? "Create an account to get started"
            : "Enter your credentials to access your account"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form className="space-y-4" action={action}>
          <FullName
            errorFullName={data?.errorFullName}
            defaultValue={data?.fieldData?.fullName}
          />
          <Email
            errorEmail={data?.errorEmail}
            defaultValue={data?.fieldData?.email}
          />
          <SubmitBtn btnLabel={formType} disabled={isPending} />
        </Form>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="w-full text-slate-500" asChild>
          <Link href={formType === "Sign Up" ? "/sign-in" : "/sign-up"}>
            {formType === "Sign Up"
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
