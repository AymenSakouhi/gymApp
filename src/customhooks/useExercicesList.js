import { useState, useEffect } from "react";

const localeCache = {};

const useExercicesList = (muscle) => {
  const [excercicesList, setExercicesList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {}, [muscle]);

  return [excercicesList, status];
};

export default useExercicesList;
