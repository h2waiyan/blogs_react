import React from "react";
import { useParams } from "react-router-dom";

const Post = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const detailpost = posts.find((post) => post.id.toString() === id);

  return (
    <div>
      <h3>{detailpost.title}</h3>
      <p style={{ color: "black" }}>{detailpost.body}</p>

      <button onClick={() => handleDelete(detailpost.id)}>Delete</button>
    </div>
  );
};

export default Post;
