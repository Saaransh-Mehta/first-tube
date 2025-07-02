'use client'
import { motion } from "framer-motion";
import Link from "next/link";

interface SignupFormProps {
  signUpWithEmail: ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => void;
  handleSocial: (strategy: "oauth_google" | "oauth_github") => void;
  clerkError: string;
  loading: boolean;
}

const SignupForm = ({
  signUpWithEmail,
  handleSocial,
  clerkError,
  loading,
}: SignupFormProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 transition-colors">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
        {/* Left Image/Graphic Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
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
            Join SaaS Youtubr
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-center px-8 mt-2 text-sm">
            Create your account to access exclusive features and manage your content.
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
            Sign Up
          </h1>
          <p className="text-center text-neutral-500 dark:text-neutral-400 mb-6">
            Create your account to continue
          </p>
          <form
            onSubmit={e => {
              e.preventDefault();
              const target = e.target as typeof e.target & {
                email: { value: string };
                password: { value: string };
              };
              signUpWithEmail({
                emailAddress: target.email.value,
                password: target.password.value,
              });
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
              disabled={loading}
              className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </motion.button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            <span className="mx-4 text-gray-400 text-xs">OR</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleSocial("oauth_google")}
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 font-medium shadow hover:bg-gray-50 dark:hover:bg-slate-700 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.4l6.4-6.4C34.5 5.1 29.5 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 20-8.9 20-20 0-1.3-.1-2.7-.3-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 17.1 19.2 14 24 14c2.7 0 5.2.9 7.2 2.4l6.4-6.4C34.5 5.1 29.5 3 24 3c-7.2 0-13.3 4.1-16.7 10.1z"/><path fill="#FBBC05" d="M24 44c5.5 0 10.5-2.1 14.3-5.6l-6.6-5.4C29.6 35.1 26.9 36 24 36c-5.7 0-10.6-3.7-12.3-8.9l-7 5.4C7.7 41.1 15.3 44 24 44z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.2 7.5-11.7 7.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.2 2.6l6.2-6.2C37.6 5.1 31.2 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 20-8.9 20-20 0-1.3-.1-2.7-.3-4z"/></g></svg>
              Sign up with Google
            </button>
            <button
              onClick={() => handleSocial("oauth_github")}
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 font-medium shadow hover:bg-gray-50 dark:hover:bg-slate-700 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
              Sign up with GitHub
            </button>
          </div>
          <div className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign in
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupForm;