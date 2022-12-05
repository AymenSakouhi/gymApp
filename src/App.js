//https://codepen.io/saawsan/pen/jayzeq

import { StrictMode } from "react";
import { render } from "react-dom";
import NewComponent from "./NewComponent";

const App = () => {
  return (
    <div>
      <h1 id="title">Welcome to the best gym companion app</h1>
      <NewComponent />
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
