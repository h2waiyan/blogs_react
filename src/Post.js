import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import store from "./store/store";
import { FaBeer } from "react-icons/fa";

const Post = () => {
  const setFavPosts = useStoreActions((actions) => actions.setFavPosts);

  const { id } = useParams();

  const posts = store.getState().posts;

  const detailpost = posts.find((post) => post.id.toString() === id);

  const makeFav = (id) => {
    setFavPosts(id);
  };

  return (
    <div>
      <h3>{detailpost.title}</h3>
      <p style={{ color: "black" }}>{detailpost.body}</p>
      <button
        style={{
          padding: "15px",
          backgroundColor: "green",
        }}
        onClick={() => makeFav(detailpost.id)}
      >
        Make Fav
      </button>
    </div>
  );
};

export default Post;
