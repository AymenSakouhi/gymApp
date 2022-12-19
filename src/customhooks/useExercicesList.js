import { useState, useEffect } from "react";

const localeCache = {};

export default function useExercicesList(muscle) {
  const [excercicesList, setExercicesList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    const requestExercicesList = async () => {
      setExercicesList([]);
      setStatus("loading");
      const res = await fetch(
        `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
        {
          headers: { "X-Api-Key": "D4xVCVZb7JamDQJUaw6KCA==3IVVUdCDX0K8n3PC" },
          contentType: "application/json",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          localeCache[muscle] = data || [];
          setExercicesList(localeCache[muscle]);
          setStatus("loaded");
        });
    };

    if (!muscle) {
      setExercicesList([]);
    } else if (localeCache[muscle]) {
      setExercicesList(localeCache[muscle]);
    } else {
      requestExercicesList();
    }
  }, [muscle]);

  return [excercicesList, status];
}
