"use client";
import { LoginForm } from "@/components/Auth/LoginForm";
import { SignInForm } from "@/components/Auth/SignInForm";
import { useState } from "react";

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {showLogin ? "Sign in to your account" : "Create an account"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <button
              onClick={() => setShowLogin(!showLogin)}
              className="font-medium text-indigo-600 hover:text-indigo-500 border-2 border-indigo-600 rounded-md px-4 py-2 ml-2 transition-colors duration-200 hover:bg-indigo-50"
            >
              {showLogin
                ? "create a new account"
                : "sign in to existing account"}
            </button>
          </p>
        </div>
        {showLogin ? <LoginForm /> : <SignInForm />}
      </div>
    </div>
  );
}
