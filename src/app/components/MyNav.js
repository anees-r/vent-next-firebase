"use client"
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

const MyNav = () => {
  const pathName = usePathname();

  const { user } = useAuth();
    const router = useRouter();

  useEffect(() => {
      if (!user.username) {
        router.push("/login");
      }
    }, [user]);
  
    const handleSignOut = () => {
      signOut(auth);
    };

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white text-purple-600">
      <nav className="flex justify-between md:justify-center py-2 px-10 md:px-0 top-0 items-center">
        <Link href={pathName} className="flex justify-center items-center">
          <Image height={30} width={30} alt="logo" src={"/assets/icons/vent-icon.svg"}/>
          <h1 className="text-2xl font-bold">vent.</h1>
        </Link>
        { (pathName !== "/login" && pathName !== "/signup") &&
          <div className="block md:hidden text-gray-600 cursor-pointer" onClick={handleSignOut}>
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
