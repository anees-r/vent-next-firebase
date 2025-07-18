"use client";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useAuth } from "../context/AuthContext";

const MyNav = () => {
  const pathName = usePathname();

  const {user} = useAuth()

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white text-purple-600">
      <nav className="flex justify-between md:justify-center py-2 px-10 md:px-0 top-0 items-center">
        <Link href={user.username ? "/home" : "/"} className="flex justify-center items-center">
          <Image
            height={30}
            width={30}
            alt="logo"
            src={"/assets/icons/vent-icon.svg"}
          />
          <h1 className="text-2xl font-bold">vent.</h1>
        </Link>
        {pathName !== "/login" && pathName !== "/signup" && pathName !== "/" && (
          <div
            className="block md:hidden text-gray-600 cursor-pointer"
            onClick={handleSignOut}
          >
            <LogoutIcon />
          </div>
        )}
      </nav>
    </div>
  );
};

export default MyNav;
