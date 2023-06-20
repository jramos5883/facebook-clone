"use client";

import Story from "./story";
import WhatsOnYourMind from "./whatsonyourmind";
import Post from "./post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import { useState, useEffect } from "react";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() =>
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    )
  );

  return (
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <Story />
      <WhatsOnYourMind />
      {posts.map((post) => {
        return <Post key={post.id} id={post.id} data={post.data()} />;
      })}
    </div>
  );
}
