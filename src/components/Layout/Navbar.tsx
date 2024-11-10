"use client";

import Link from "next/link";

import { Button } from "@/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import router from "next/router";

export function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              MyApp
            </Link>
          </div>
          <div className="flex items-center">
            {user ? (
              <>
                <Link href="/dashboard" className="mr-4">
                  Dashboard
                </Link>
                <Button onClick={signOut}>Sign out</Button>
              </>
            ) : (
              <Link href="/login">
                <Button>Sign in</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
