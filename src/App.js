import { StrictMode } from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
