"use client"
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import React from "react";

const LandingButton = () => {
  const { user } = useAuth();

  return (
    <div>
      <Link href={user.username ? "/home" : "/login"}>
        <button className="h-[35px] w-[300px] bg-purple-600 text-white rounded-md mt-2 cursor-pointer hover:bg-purple-500 transtion">
          {user.username ? "Check your posts" : "Get started"}
        </button>
      </Link>
    </div>
  );
};

export default LandingButton;
