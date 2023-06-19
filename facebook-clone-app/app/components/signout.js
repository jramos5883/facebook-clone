"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function SignOutButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <Image
      className="w-[44px] cursor-pointer rounded-full"
      src={session?.user?.image}
      alt="dp"
      width={50}
      height={50}
      onClick={signOut}
    />
  );
}
