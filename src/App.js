//https://codepen.io/saawsan/pen/jayzeq

import { StrictMode, useState } from "react";
import { render } from "react-dom";
import BackgroundContext from "./contexts/BackgroundContext";
import ColorContext from "./contexts/ColorContext";
import btnContext from "./contexts/BtnContext";
import Videos from "./components/Videos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

const App = () => {
  const background = useState("rgba(162,102,255,1)");
  const color = useState("#51516b");
  const btnTextColor = useState("#ffffff");

  return (
    <BackgroundContext.Provider value={background}>
      <ColorContext.Provider value={color}>
        <btnContext.Provider value={btnTextColor}>
          <div>
            <Router>
              <Switch>
                <Route path="/videos">
                  <Videos embedId="TW9uj83Vq-0" />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
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
