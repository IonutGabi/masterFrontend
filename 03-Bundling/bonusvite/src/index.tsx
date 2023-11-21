import { createRoot } from "react-dom/client";
import "./styles.css";

const rootElement = createRoot(document.getElementById("root"));

rootElement.render(
  <div>
    <h1 className="background">Hello World from React</h1>
  </div>
);
