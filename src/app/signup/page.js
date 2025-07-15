"use client";
import React, { useEffect } from "react";
import LogInSignUpForm from "../components/common/LogInSignUpForm";

const SignUp = () => {
  useEffect(() => {
    document.title = "Vent - Sign Up";
  }, []);

  const handleSubmit = (data) => {
    console.log("signup:", data);
  };
  return (
    <div>
      <LogInSignUpForm type={"signup"} handleSubmit={handleSubmit} />
    </div>
  );
};

export default SignUp;
