"use client";
import React, { useEffect } from "react";
import LogInSignUpForm from "../components/common/LogInSignUpForm";

const Login = () => {
  useEffect(() => {
    document.title = "Vent - Log In";
  }, []);

  const handleSubmit = (data) => {
    console.log("login:", data);
  };
  return (
    <div>
      <LogInSignUpForm type={"login"} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
