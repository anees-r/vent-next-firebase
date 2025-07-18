"use client";
import Link from "next/link";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FriendlyFirebaseError from "@/app/utils/FriendlyFirebaseError";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";

const LogInSignUpForm = (props) => {
  const type = props.type === "login" ? "L" : "S";

  const [hidePass, setHidePass] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAnonUserLogIn = async () => {
    if (type === "L") {
      props.setIsLoggingIn(true);
    } else {
      props.setIsSigningUp(true);
    }

    try {
      await signInWithEmailAndPassword(
        auth,
        "anonymous.user@vent.com",
        "anonventuserpass8"
      );

      toast.success("Login successful.", {
        progressClassName: "custom-progress-bar",
      });
    } catch (error) {
      if (type === "L") {
        props.setIsLoggingIn(false);
      } else {
        props.setIsSigningUp(false);
      }
      toast.error(FriendlyFirebaseError(error));
    }
  };

  return (
    <div className="h-[90%] flex justify-center items-center p-10">
      <div className="bg-gray-100 w-[500px] h-fit rounded-2xl p-5 flex flex-col justify-center items-center gap-5 shadow-md">
        <h1 className="text-center text-xl">
          {type === "S" ? "Sign Up" : "Log In"}
        </h1>
        <form action="" className="flex flex-col gap-3 w-full">
          {type === "S" && (
            <input
              type="text"
              className="h-[35px] w-full bg-white p-3 outline-none rounded-md border-0 focus:border-2 focus:border-purple-300"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          )}
          <input
            type="email"
            className="h-[35px] w-full bg-white p-3 outline-none rounded-md border-0 focus:border-2 focus:border-purple-300"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="h-[35px] w-full bg-white outline-none rounded-md border-0 focus-within:border-2 focus-within:border-purple-300 flex items-center px-3">
            <input
              type={hidePass ? "password" : "text"}
              className="outline-none rounded w-full"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div
              onClick={() => {
                setHidePass(!hidePass);
              }}
              className="text-purple-600 cursor-pointer"
            >
              {hidePass ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>

          <button
            className="h-[35px] w-full bg-purple-600 text-white rounded-md mt-2 cursor-pointer hover:bg-purple-500 transtion"
            onClick={(e) => {
              e.preventDefault();
              props.handleSubmit({
                name,
                email,
                password,
              });
            }}
          >
            {type === "S" ? "Sign Up" : "Log In"}
          </button>

          <div className="flex justify-between items-center">
            <hr
              style={{
                height: "2px",
                width: "45%",
                opacity: "0.15",
              }}
            />

            <p className="text-center text-sm">Or</p>

            <hr
              style={{
                height: "2px",
                width: "45%",
                opacity: "0.15",
              }}
            />
          </div>

          <button
            className="h-[35px] w-full bg-purple-600 text-white rounded-md cursor-pointer hover:bg-purple-500 transtion"
            onClick={(e) => {
              e.preventDefault();
              handleAnonUserLogIn();
            }}
          >
            Login as Anonymous User
          </button>

          {type === "S" ? (
            <p className="text-center">
              Already have an account?{" "}
              <span className="text-purple-600 hover:underline transition">
                <Link href={"/login"}>Log In</Link>
              </span>
            </p>
          ) : (
            <p className="text-center">
              Don't have an account?{" "}
              <span className="text-purple-600 hover:underline transition">
                <Link href={"/signup"}>Sign Up</Link>
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LogInSignUpForm;
