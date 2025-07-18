"use client";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { toast } from "react-toastify";

const VentInputForm = () => {
  const [ventText, setVentText] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const { user } = useAuth();

  const handleSaveVent = async () => {
    try {
      setIsSaving(true);
      await addDoc(collection(db, "posts"), {
        name: user.name,
        username: user.username,
        text: ventText,
        timestamp: serverTimestamp(),
      });
      
      toast.success("Post created successfully.", {
        progressClassName: "custom-progress-bar",
      });

      setIsSaving(false);
      setVentText("");
    } catch (error) {
      setIsSaving(false);
      toast.error("Error saving post.");
    }
  };

  return (
    <>
      <div className="flex flex-col items-end">
        <textarea
          type="text"
          className=" resize-none h-[100px] w-full bg-gray-100 p-3 outline-none rounded-md border-0 focus:border-2 focus:border-purple-300"
          placeholder="Unravel your thoughts"
          id="textinput"
          value={ventText}
          onChange={(e) => {
            setVentText(e.target.value);
          }}
        />
        <button
          className="h-[35px] w-[100px] bg-purple-600 text-white rounded-md mt-2 cursor-pointer hover:bg-purple-500 transtion disabled:bg-purple-400 disabled:cursor-not-allowed"
          onClick={handleSaveVent}
          disabled={!ventText || isSaving}
        >
          Vent
        </button>

        <hr
          style={{
            height: "2px",
            width: "100%",
            marginTop: "30px",
            marginBottom: "15px",
            opacity: "0.15",
          }}
        />
      </div>
    </>
  );
};

export default VentInputForm;
