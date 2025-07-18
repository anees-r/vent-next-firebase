"use client";
import React, { useEffect, useState } from "react";
import LogInSignUpForm from "../components/common/LogInSignUpForm";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import MyLoader from "../components/common/MyLoader";
import FriendlyFirebaseError from "../utils/FriendlyFirebaseError";
import { toast } from "react-toastify";

const SignUp = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const { user, setUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    document.title = "Vent - Sign Up";
  }, []);

  console.log(user);
  useEffect(() => {
    if (user.name) {
      setIsSigningUp(false);
      router.push("/home");
    }
  }, [user]);

  const handleSubmit = async (data) => {
    if (!data.name || !data.email || !data.password) {
      return toast.error("Please fill all fields.");
    }

    setIsSigningUp(true);

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(userCredentials.user, {
        displayName: data.name,
      });

      setUser({
        name: userCredentials.user.displayName,
        username: userCredentials.user.email.split("@")[0],
        email: userCredentials.user.email,
        uid: userCredentials.user.uid,
      });

      toast.success("Signup successful.", {
        progressClassName: "custom-progress-bar",
      });
    } catch (error) {
      setIsSigningUp(false);
      toast.error(FriendlyFirebaseError(error));
    }
  };

  return (
    <>
      {isSigningUp && <MyLoader />}
      <div className="h-screen">
        <LogInSignUpForm
          type={"signup"}
          handleSubmit={handleSubmit}
          setIsSigningUp={setIsSigningUp}
        />
      </div>
    </>
  );
};

export default SignUp;
