"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

export default function SignOutPage() {
  const [message, setMessage] = useState("");

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage("Successfully signed out!");
    } catch (err) {
      console.error("Sign out error:", err);
      setMessage("Error signing out. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg w-96">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Sign Out</h1>
        <p className="text-lg text-gray-600 mb-6">
          You are about to log out. Do you want to proceed?
        </p>
        <button
          onClick={handleSignOut}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-xl focus:outline-none"
        >
          Sign Out
        </button>
        {message && (
          <div className="mt-6 text-green-600 text-lg">{message}</div>
        )}
      </div>
    </div>
  );
}
