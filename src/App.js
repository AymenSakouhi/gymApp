//https://codepen.io/saawsan/pen/jayzeq

import { StrictMode, useState } from "react";
import { render } from "react-dom";
import NewComponent from "./NewComponent";
import BackgroundContext from "./BackgroundContext";
import ColorContext from "./ColorContext";

const App = () => {
  const background = useState("rgba(162,102,255,1)");
  const color = useState("#51516b");

  return (
    <BackgroundContext.Provider value={background}>
      <ColorContext.Provider value={color}>
        <div>
          <NewComponent />
        </div>
      </ColorContext.Provider>
    </BackgroundContext.Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
