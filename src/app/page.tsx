import useAuthSore from "@/zustand/useAuthStore";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">Home Page</h1>

      <div className="flex items-center gap-x-4 mt-2">
        <button className="p-4 py-1 rounded-lg bg-[#db1a5a] hover:bg-[#f02b65] transition-colors text-lg font-medium">
          Sing Up
        </button>

        <button className="p-4 py-1 rounded-lg bg-[#db1a5a] hover:bg-[#f02b65] transition-colors text-lg font-medium">
          Login
        </button>
      </div>
    </main>
  );
}
