"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import SignupForm from "@/components/SignUp";

const page = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [clerkError, setClerkError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signUpWithEmail = async ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => {
    if (!isLoaded) return;
    setLoading(true);
    setClerkError("");
    try {
      const result = await signUp.create({
        emailAddress,
        password,
      });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/");
      }
    } catch (err: any) {
      setClerkError(err.errors?.[0]?.message || "Sign up failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSocial = async (strategy: "oauth_google" | "oauth_github") => {
    if (!isLoaded) return;
    setLoading(true);
    setClerkError("");
    try {
      await signUp.authenticateWithRedirect({ strategy, redirectUrl: "/", redirectUrlComplete: "/" });
    } catch (err: any) {
      setClerkError("Social sign up failed");
      setLoading(false);
    }
  };

  return (
    <SignupForm
      signUpWithEmail={signUpWithEmail}
      handleSocial={handleSocial}
      clerkError={clerkError}
      loading={loading}
    />
  );
};

export default page;