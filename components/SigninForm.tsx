'use client'
import Link from "next/link";
import { motion } from "framer-motion";

interface SignInFormProps {
  signInWithEmail: ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => void;
  clerkError: string;
}

const SigninForm = ({ signInWithEmail, clerkError }: SignInFormProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 transition-colors">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
        >
          <svg
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
  >
    <circle style={{ fill: '#FF2746' }} cx="256" cy="256" r="256" />
    <path
      style={{ fill: '#A01335' }}
      d="M308.379,506.628C424.639,482.454,512,379.433,512,256c0-2.345-0.036-4.68-0.098-7.009
        L353.816,90.905l-65.636,27.183l-11.428,133.93L119.38,284.444l139.735,139.735L256,454.249L308.379,506.628z"
    />
    <rect
      x="256"
      y="226.694"
      width="28.444"
      height="227.556"
      style={{ fill: '#FFC61B' }}
    />
    <rect
      x="268.36"
      y="226.694"
      width="16.089"
      height="227.556"
      style={{ fill: '#D48B07' }}
    />
    <path
      style={{ fill: '#FFAD9E' }}
      d="M204.714,284.444H375.38v-85.333c0-31.418-25.471-56.889-56.889-56.889H176.269L204.714,284.444z"
    />
    <path
      style={{ fill: '#FF6262' }}
      d="M375.38,199.111c0-31.418-25.471-56.889-56.889-56.889h-50.136v142.222H375.38V199.111z"
    />
    <path
      style={{ fill: '#FFFFFF' }}
      d="M119.38,199.111c0-31.418,25.471-56.889,56.889-56.889s56.889,25.471,56.889,56.889v85.333H119.38
        V199.111z"
    />
    <path
      style={{ fill: '#366695' }}
      d="M349.482,89.416h-68.687v99.873c0,3.17,2.57,5.741,5.741,5.741l0,0c3.17,0,5.741-2.57,5.741-5.741
        v-61.99h57.208c3.91,0,7.078-3.169,7.078-7.078V96.494C356.561,92.584,353.392,89.416,349.482,89.416z"
    />
  </svg>
          <h2 className="mt-6 text-xl font-semibold text-neutral-700 dark:text-neutral-200 text-center px-6">
            Welcome to SaaS Youtubr
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-center px-8 mt-2 text-sm">
            Sign in to access your dashboard and manage your content.
          </p>
        </motion.div>
        {/* Right Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="flex flex-col justify-center px-8 py-10 md:py-16"
        >
          <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
            Sign In
          </h1>
          <p className="text-center text-neutral-500 dark:text-neutral-400 mb-6">
            Enter your credentials to continue
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const target = e.target as typeof e.target & {
                email: { value: string };
                password: { value: string };
              };
              const email = target.email.value;
              const password = target.password.value;
              signInWithEmail({ emailAddress: email, password: password });
            }}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                Email Address
              </label>
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#2563eb" }}
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-neutral-900 transition"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                Password
              </label>
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#2563eb" }}
                type="password"
                name="password"
                required
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-neutral-900 transition"
                placeholder="Your password"
              />
            </div>
            {clerkError && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm text-center"
              >
                {clerkError}
              </motion.div>
            )}
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Sign In
            </motion.button>
          </form>
          <div className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SigninForm;