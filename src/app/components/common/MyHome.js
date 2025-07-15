"use client";
import React, { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContrastIcon from "@mui/icons-material/Contrast";
import FormControlLabel from "@mui/material/FormControlLabel";
import MaterialUISwitch from "./CustomToggle";
import VentInputForm from "./VentInputForm";
import VentItem from "./VentItem";
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";

const MyHome = () => {
  useEffect(() => {
    document.title = "Vent - Home";
  }, []);
  return (
    <div>
      {/* sidebar right */}
      <div className="flex h-full gap-5 justify-center">
        <div className="h-[85%] xl:w-[15%] hidden md:flex flex-col justify-between bg-gray-100 fixed top-15 left-15 p-3 rounded-2xl">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex items-center gap-2 w-full">
              <AccountCircleIcon style={{ fontSize: "30px" }} />
              <div className="hidden xl:block">
                <h1 className="font-bold text-sm">Anees</h1>
                <p className="text-xs text-gray-500">anees@vent.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full">
              <ContrastIcon style={{ fontSize: "30px" }} />
              <div className="hidden xl:flex justify-between items-center gap-2 w-full">
                <h1 className="font-bold text-sm">Theme</h1>
                <FormControlLabel
                  control={
                    <MaterialUISwitch
                      style={{ fontSize: "10px" }}
                      // defaultChecked
                    />
                  }
                />
              </div>
            </div>
          </div>

          <Link href={"/login"}>
            <div className="xl:hidden cursor-pointer">
              <Link href={"/login"}>
                <LogoutIcon />
              </Link>
            </div>
            <button className="h-[35px] hidden xl:block w-full bg-gray-600 text-white rounded-md mt-2 cursor-pointer hover:bg-gray-500 transtion">
              Log Out
            </button>
          </Link>
        </div>
        {/* main section */}
        <div className="h-[85%] w-[100%] md:w-[80%] xl:w-[60%] flex flex-col justify-betweenp-3 rounded-2xl gap-5">
          <h1 className="font-bold">
            Hello <span className="text-purple-600">Anees</span>!
          </h1>
          <VentInputForm />
          <VentItem />
          <VentItem />
          <VentItem />
          <VentItem />
          <VentItem />
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
  );
};

export default MyHome;
