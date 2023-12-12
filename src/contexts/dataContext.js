import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../hooks/windowSize";
import useAxios from "../hooks/useAxios";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const { width } = useWindowSize();
  const { data, fetchError, isLoading } = useAxios(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const navigate = useNavigate();

  useEffect(() => {
    setPosts(data);
  }, [data]);

  const handleDelete = (id) => {
    const newPost = posts.filter((post) => post.id !== id);
    setPosts(newPost);
    navigate("/home");
  };

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        width,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
