"use client"
import React, { useState } from "react";

const VentInputForm = () => {
  const [ventText, setVentText] = useState("");

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
        <button className="h-[35px] w-[100px] bg-purple-600 text-white rounded-md mt-2 cursor-pointer hover:bg-purple-500 transtion">
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
