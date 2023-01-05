import { useState, useEffect } from "react";

const localCache = {};

const useYTvideoFetch = (muscle) => {
  const [videoId, setVideoId] = useState([]);
  const [status, setStatus] = useState("Unloaded");

  const fetchVideoId = async () => {
    setStatus("Loading");
    setVideoId([]);
    const data = await fetch(
      // `https://www.googleapis.com/youtube/v3/search?key=AIzaSyArr6LAAQokncaFri-WBzPmqkSeaAm6ASE&q=${muscle} excercices&type=video&part=snippet&maxResults=1`
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDSJTIqqLYaYtcaQjLGlorJSBZrFqThxOY&q=${muscle} excercices&type=video&part=snippet&maxResults=1`
    );
    const json = await data.json();
    const result = json || [];
    localCache["muscle"] = result;
    setVideoId(localCache["muscle"]);
    setStatus("Loaded");
  };

  useEffect(() => {
    if (!muscle) {
      setVideoId([]);
    } else if (localCache[muscle]) {
      setVideoId(localCache[muscle]);
    } else {
      fetchVideoId();
    }
  }, [muscle]);
  return [videoId.items, status];
};

export default useYTvideoFetch;
