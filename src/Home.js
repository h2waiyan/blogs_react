import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ posts }) => {
  return (
    <div className="post-page">
      {posts.map((post) => {
        return (
          <div className="card" key={post.id}>
            <Link to={`/post/${post.id}`}>
              <div className="post-title">{post.title}</div>
            </Link>
            <div className="post-content">{post.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
