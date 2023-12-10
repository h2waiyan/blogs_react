import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ search, setSearch, searchPost, width }) => {
  return (
    <div className="navbar">
      <p>ReactJS Blogs</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchPost(search);
        }}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>

      <div>
        <Link to="/home">
          <span>Home</span>
        </Link>
        <Link to="/post">
          <span>Post</span>
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
