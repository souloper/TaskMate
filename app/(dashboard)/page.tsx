"use client";
import Board from "@/components/Board";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useClerk } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { user } = useClerk();

  if (!user) return redirect("/sign-in");
  //for server side preferences
  // import { currentUser } from "@clerk/nextjs";
  // import type { User } from "@clerk/nextjs/api";

  // export default async function Home() {
  //   const user: User | null = await currentUser();
  //   if (!user) return redirect("/sign-in");

  return (
    <main>
      <Header />

      <Board />
        <Footer />
    </main>
  );
}
