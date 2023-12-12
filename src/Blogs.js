import React from "react";
import { useStoreActions } from "easy-peasy";
import store from "./store/store";

const Blogs = () => {
  const posts = store.getState().posts;
  const favPosts = store.getState().favPosts;

  const favList = posts.filter((post) => {
    return favPosts.includes(post.id);
  });

  return (
    <div>
      {favList.map((post) => {
        return (
          <div className="card" key={post.id}>
            <div className="post-title">{post.title}</div>

            <div className="post-content">{post.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
