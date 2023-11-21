import { createRoot } from "react-dom/client";
import { HelloWorldComponent } from "./hello.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <HelloWorldComponent />
  </div>
);
