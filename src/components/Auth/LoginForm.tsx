"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import { useAuth } from "@/contexts/AuthContext";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRegister, setIsRegister] = useState(false);
  const router = useRouter();
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error } = isRegister
        ? await signUp(email, password)
        : await signIn(email, password);

      if (error) {
        setError(error.message);
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-8 space-y-8 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        {isRegister ? "Register" : "Login"}
      </h2>

      {error && (
        <div className="p-3 text-sm text-red-600 bg-red-100 border border-red-200 rounded-lg">
          {error}
        </div>
      )}

      <div className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={loading}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            disabled={loading}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading
          ? isRegister
            ? "Registering..."
            : "Signing in..."
          : isRegister
          ? "Register"
          : "Login"}
      </Button>

      <button
        type="button"
        onClick={() => setIsRegister(!isRegister)}
        className="w-full text-sm text-blue-600 hover:text-blue-700 text-center mt-4"
      >
        {isRegister
          ? "Already have an account? Sign in"
          : "Don't have an account? Register"}
      </button>
    </form>
  );
}
