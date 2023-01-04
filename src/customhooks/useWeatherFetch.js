import { useState, useEffect } from "react";

const localCache = {};

const useWeatherFetch = () => {
  const [weatherNow, setWeatherNow] = useState([]);
  const [status, setStatus] = useState("Unloaded");

  const fetchWeatherData = async () => {
    setWeatherNow([]);
    setStatus("LOADING");
    const fetchData = await fetch(
      `https://api.api-ninjas.com/v1/weather?city=Munich`,
      {
        headers: { "X-Api-Key": "D4xVCVZb7JamDQJUaw6KCA==3IVVUdCDX0K8n3PC" },
        contentType: "application/json",
      }
    );
    const json = await fetchData.json();
    const result = json || [];
    localCache["Munich"] = result;
    setWeatherNow(localCache["Munich"]);
    setStatus("Loaded");
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return [weatherNow, status];
};

export default useWeatherFetch;
