"use client"
import React from "react";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MyNav = () => {
  const pathName = usePathname();
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white text-purple-600">
      <nav className="flex justify-between md:justify-center py-2 px-15 md:px-0 top-0 items-center">
        <Link href="/" className="flex justify-center items-center">
          <Image height={30} width={30} alt="logo" src={"/assets/icons/vent-icon.svg"}/>
          <h1 className="text-2xl font-bold">vent.</h1>
        </Link>
        { (pathName !== "/login" && pathName !== "/signup") &&
          <div className="block md:hidden text-gray-600 cursor-pointer">
          <Link href={"/login"}>
            <LogoutIcon />
          </Link>
        </div>
        }
      </nav>
    </div>
  );
};

export default MyNav;
