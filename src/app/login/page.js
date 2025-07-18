"use client";
import React, { useEffect, useState } from "react";
import LogInSignUpForm from "../components/common/LogInSignUpForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import MyLoader from "../components/common/MyLoader";
import FriendlyFirebaseError from "../utils/FriendlyFirebaseError";
import { toast } from "react-toastify";

const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    document.title = "Vent - Sign Up";
  }, []);

  useEffect(() => {
    if (user.username) {
      setIsLoggingIn(false);
      router.push("/home");
    }
  }, [user]);

  useEffect(() => {
    document.title = "Vent - Log In";
  }, []);

  const handleSubmit = async (data) => {
    if (!data.email || !data.password) {
      return toast.error("Please fill all fields.");
    }

    setIsLoggingIn(true);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      toast.success("Login successful.", {
        progressClassName: "custom-progress-bar",
      });
    } catch (error) {
      setIsLoggingIn(false);
      toast.error(FriendlyFirebaseError(error));
    }
  };
  return (
    <>
      {isLoggingIn && <MyLoader />}
      <div className="h-screen">
        <LogInSignUpForm
          type={"login"}
          handleSubmit={handleSubmit}
          setIsLoggingIn={setIsLoggingIn}
        />
      </div>
    </>
  );
};

export default Login;
