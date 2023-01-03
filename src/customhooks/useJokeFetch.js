import { useEffect, useState } from "react";

const useJokeFetch = () => {
  const [jokes, setJokes] = useState([]);
  const [status, setStatus] = useState("Unloaded");

  const fetchJokes = async () => {
    setJokes([]);
    setStatus("Loading");
    const fetchRes = await fetch("https://api.chucknorris.io/jokes/random");
    const res = await fetchRes.json();
    const result = res || [];
    setJokes(result);
    setStatus("Loaded");
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return [jokes, status];
};

export default useJokeFetch;
