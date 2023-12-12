import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import { useStoreState } from "easy-peasy";

const Home = ({ isLoading, fetchError }) => {
  const posts = useStoreState((state) => state.posts);
  const search = useStoreState((state) => state.search);
  const searchResults = useStoreState((state) => state.searchResults);

  const results = search ? searchResults : posts;

  useEffect(() => {
    console.log(results);
  }, [search]);

  return (
    <div className="post-page">
      {isLoading && <p style={{ color: "black" }}>Loading ... </p>}
      {fetchError && <h1>{fetchError}</h1>}

      {results.map((post) => {
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
