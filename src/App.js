//https://codepen.io/saawsan/pen/jayzeq

import { StrictMode, useContext, useState } from "react";
import { render } from "react-dom";
import NewComponent from "./NewComponent";
import BackgroundContext from "./BackgroundContext";
import ColorContext from "./ColorContext";
import btnContext from "./BtnContext";

const App = () => {
  const background = useState("rgba(162,102,255,1)");
  const color = useState("#51516b");
  const btnColor = useState("brown");

  return (
    <BackgroundContext.Provider value={background}>
      <ColorContext.Provider value={color}>
        <btnContext.Provider value={btnColor}>
          <div>
            <NewComponent />
          </div>
        </btnContext.Provider>
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
