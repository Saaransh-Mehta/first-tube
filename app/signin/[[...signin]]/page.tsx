// app/sign-in/[[...sign-in]]/page.tsx
"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {useSignIn} from "@clerk/nextjs";
import SigninForm from '@/components/SigninForm'

const Signin = () => {
  const {isLoaded, signIn, setActive} = useSignIn();
  const [clerkError, setClerkError] = useState("");
  const router = useRouter();

  const signInWithEmail = async ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => {
    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });
      if (result.status === "complete") {
        console.log(result);
        await setActive({session: result.createdSessionId});
        router.push("/");
      } else {
        console.log(result);
      }
    } catch (err: string | unknown) {
      console.log(JSON.stringify(err, null, 2));
      if (
        typeof err === "object" &&
        err !== null &&
        "errors" in err &&
        Array.isArray(err.errors) &&
        err.errors[0]?.message
      ) {
        setClerkError(err.errors[0].message);
      } else if (typeof err === "string") {
        setClerkError(err);
      } else {
        setClerkError("An unknown error occurred.");
      }
    }
  };

  return (
    <SigninForm signInWithEmail={signInWithEmail} clerkError={clerkError} />
  );
};

export default Signin;
