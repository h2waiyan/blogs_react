import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const useAxios = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fectchError, setFectchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });

        if (isMounted) {
          setData(response.data);
          setFectchError(null);
        }
      } catch (err) {
        setFectchError(err.message);
        setData([]);
      } finally {
        isMounted && setTimeout(() => setIsLoading(false), 200);
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      console.log("Cleaning up ...");
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return { data, fectchError, isLoading };
};

export default useAxios;
