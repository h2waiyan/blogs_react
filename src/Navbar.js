import React, { useEffect } from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import DataContext from "./contexts/dataContext";
import { useStoreActions, useStoreState } from "easy-peasy";
import store from "./store/store";
const Navbar = () => {
  const { width } = useContext(DataContext);

  const posts = useStoreState((state) => state.posts);
  const search = useStoreState((state) => state.search);
  const setSearchResults = useStoreActions((actions) => actions.setPosts);
  const setSearch = useStoreActions((actions) => actions.setSearch);

  useEffect(() => {
    console.log(search);
    const filteredPosts = posts.filter((post) =>
      post["title"].toLowerCase().includes(search.toLowerCase())
    );

    console.log(filteredPosts);
    console.log(posts);

    setSearchResults(filteredPosts);
  }, [search]);

  return (
    <div className="navbar">
      <p>ReactJS Blogs</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>

      <div>
        <Link to="/home">
          <span>Home</span>
        </Link>
        <Link to="/post">
          <span>Fav Posts</span>
        </Link>
        <Link to="/about">
          <span>About </span>
        </Link>
        {width < 768 ? (
          <FaMobileAlt style={{ color: "white" }} />
        ) : width < 992 ? (
          <FaTabletAlt style={{ color: "white" }} />
        ) : (
          <FaLaptop style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
