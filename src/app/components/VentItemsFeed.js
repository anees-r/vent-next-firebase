"use client";
import React, { useEffect, useState } from "react";
import VentItem from "./common/VentItem";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { useAuth } from "../context/AuthContext";

const VentItemsFeed = () => {
  const [posts, setPosts] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    if (user.username) {
      const q = query(
        collection(db, "posts"),
        where("username", "==", user?.username),
        orderBy("timestamp", "desc")
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const snapshotDocs = snapshot.docs;

        setPosts(snapshotDocs);
      });

      return unsubscribe;
    }
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      {posts.map((post) => (
        <VentItem key={post.id} data={post.data()} id={post.id}/>
      ))}
    </div>
  );
};

export default VentItemsFeed;
