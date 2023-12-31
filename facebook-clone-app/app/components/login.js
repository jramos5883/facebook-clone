"use client";

import { signIn } from "next-auth/react";

import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-primary h-screen grid place-items-center">
        <BsFacebook className="text-white text-[200px]" />
      </div>

      <div className="grid place-items-center bg-black">
        <div
          className="flex gap-4 bg-[#fff] p-4 px-6 items-center rounded-[6px] cursor-pointer"
          onClick={() => signIn()}
        >
          <FcGoogle className="text-[30px]" /> SignIn with Google
        </div>
      </div>
    </div>
  );
}
