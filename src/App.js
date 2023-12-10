import Navbar from "./Navbar";
import Blogs from "./Blogs";
import About from "./About";
import Home from "./Home";
import Footer from "./Footer";
import Post from "./Post";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useWindowSize from "./hooks/windowSize";
import useAxios from "./hooks/useAxios";

function App() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const { width } = useWindowSize();
  const { data, fetchError, isLoading } = useAxios(
    "https://jsonplaceholder.typicode.com/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  const navigate = useNavigate();

  const searchPost = (search) => {
    alert(search);
  };

  const handleDelete = (id) => {
    const newPost = posts.filter((post) => post.id !== id);
    setPosts(newPost);
    navigate("/home");
  };

  return (
    <div>
      <Navbar
        search={search}
        setSearch={setSearch}
        searchPost={searchPost}
        width={width}
      ></Navbar>
      <Routes>
        <Route exact path="/home" element={<Home posts={posts} />} />

        <Route exact path="/post" element={<Blogs />} />
        <Route
          exact
          path="/post/:id"
          element={<Post posts={posts} handleDelete={handleDelete} />}
        />

        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<h1>No Page found</h1>} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
