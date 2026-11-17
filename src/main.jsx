
import { StrictMode } from "react"; //help to know problems in code
import { createRoot } from "react-dom/client"; // connect react to html

import App from "./App.jsx";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Custom Dashboard CSS
import "./styles/dashboard.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
