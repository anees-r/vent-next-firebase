"use client";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContrastIcon from "@mui/icons-material/Contrast";
import FormControlLabel from "@mui/material/FormControlLabel";
import MaterialUISwitch from "../components/common/CustomToggle";
import VentInputForm from "../components/VentInputForm";
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import { useTheme } from "next-themes";
import MyLoader from "../components/common/MyLoader";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import VentItemsFeed from "../components/VentItemsFeed";

const MyHome = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { theme, setTheme } = useTheme();

  const { user } = useAuth();
  const router = useRouter();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.title = "Vent - Home";
  }, []);

  useEffect(() => {
    console.log("username", user.name);
    if (!user.username) {
      setIsLoggingOut(true);
      setTimeout(() => {
        setIsLoggingOut(false);
        router.push("/");
      }, 2000);
    }
  }, [user]);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div className="py-15 px-10 overflow-hidden">
        {/* sidebar right */}
        {isLoggingOut && <MyLoader />}
        <div className="flex h-full gap-5 justify-center">
          <div className="h-[85%] xl:w-[15%] hidden md:flex flex-col justify-between bg-gray-100 fixed top-15 left-15 p-3 rounded-2xl">
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-center gap-2 w-full">
                <AccountCircleIcon style={{ fontSize: "30px" }} />
                <div className="hidden xl:block">
                  <h1 className="font-bold text-sm">{user.username}</h1>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
              {/* <div className="flex items-center gap-2 w-full">
              <div onClick={toggleTheme}>
                <ContrastIcon style={{ fontSize: "30px" }} />
              </div>
              <div className="hidden xl:flex justify-between items-center gap-2 w-full">
                <h1 className="font-bold text-sm">Theme</h1>
                <FormControlLabel
                    onClick={toggleTheme}
                    control={
                      <MaterialUISwitch
                        style={{ fontSize: "10px" }}
                        checked={theme === "dark" ? true :  false}
                      />
                    }
                  />
                
              </div>
            </div> */}
            </div>

            <div>
              <div className="xl:hidden cursor-pointer" onClick={handleSignOut}>
                <LogoutIcon />
              </div>
              <button
                onClick={handleSignOut}
                className="h-[35px] hidden xl:block w-full bg-gray-100 text-red-500 rounded-md mt-2 cursor-pointer hover:bg-white transtion border-2 border-red-500"
              >
                Log Out
              </button>
            </div>
          </div>
          {/* main section */}
          <div className="h-[85%] w-[100%] md:w-[80%] xl:w-[60%] flex flex-col justify-betweenp-3 rounded-2xl gap-5">
            <h1 className="font-bold">
              Hello{" "}
              <span className="text-purple-600">{user ? user.name : ""}</span>!
            </h1>
            <VentInputForm />
            <VentItemsFeed />
            {/* https://www.npmjs.com/package/react-locomotive-scroll */}
          </div>
          {/* sidebar left */}
          <div className="h-[85%] md:w-[5%] xl:w-[15%] flex flex-col justify-between bg-gray-100 fixed top-15 right-15 rounded-2xl overflow-hidden">
            <Image
              layout="fill"
              alt="scribble"
              src={"/assets/images/scribble.svg"}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="w-screen inline-block" style={{ height: "50px" }}></div>
      </div>
    </>
  );
};

export default MyHome;
