"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function SignInPage() {
  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    try {
      await signIn("github");
      setMessage("Signing in with GitHub...");
    } catch (err) {
      console.error("Sign in error:", err);
      setMessage("Error signing in. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Sign In
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Sign in with your GitHub account
        </p>
        <button
          onClick={handleSignIn}
          className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded flex items-center justify-center transition duration-200"
        >
          <FaGithub className="mr-2 text-xl" /> Sign in with GitHub
        </button>
        {message && (
          <div className="mt-4 text-center text-sm text-blue-500">
            {message}
          </div>
        )}
        <p className="mt-6 text-gray-500 text-sm text-center">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
