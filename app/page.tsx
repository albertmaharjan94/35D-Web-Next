"use client"; // to use context should be client
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function Home() {
  const { user, logout } = useAuth();
  return (
    <div>
      Home
      {user && `Welcome, ${user.email}`}
      {user && <button onClick={logout}>Logout</button>}
    </div>
  );
}
