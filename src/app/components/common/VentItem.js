"use client";
import React from "react";
import MoreDropDownMenu from "./MoreDropDownMenu";
import { toast } from "react-toastify";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase";

const VentItem = (props) => {
  console.log("props", props.id);

  const handleDelete = async() => {
    try {
      await deleteDoc(doc(db, "posts", props.id))

      toast.success("Post deleted successfully.", {
        progressClassName: "custom-progress-bar",
      });
    } catch (error) {
      toast.error("Error deleting post.");
    }
  };
  return (
    <>
      <div className="p-3 w-full bg-gray-100 rounded-2xl flex flex-col gap-5">
        <div className="flex gap-2 justify-between">
          <div className="flex gap-2 items-center">
            <h1 className="font-bold">{props.data.name}</h1>
            &#x2022;
            <p className="text-xs opacity-[0.5]">
              {props.data.timestamp?.toDate().toLocaleString()}
            </p>
          </div>
          <div className="cursor-pointer">
            <MoreDropDownMenu handleDelete={handleDelete}/>
          </div>
        </div>
        <p>{props.data.text}</p>
      </div>
    </>
  );
};

export default VentItem;
