import Navbar from "./Navbar";
import Blogs from "./Blogs";
import About from "./About";
import Home from "./Home";
import Footer from "./Footer";
import Post from "./Post";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAxios from "./hooks/useAxios";
import { useStoreActions } from "easy-peasy";
import store from "./store/store";

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);

  const { data, fetchError, isLoading } = useAxios(
    "https://jsonplaceholder.typicode.com/posts"
  );

  console.log(data);

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/home"
          element={<Home isLoading={isLoading} fetchError={fetchError} />}
        />

        <Route exact path="/post" element={<Blogs />} />
        <Route exact path="/post/:id" element={<Post />} />

        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<h1>No Page found</h1>} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
