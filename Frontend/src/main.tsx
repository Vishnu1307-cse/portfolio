import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reacthalf from "./assets/react-half.png";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="relative min-h-screen overflow-hidden">

      {/* GLOBAL BACKGROUND IMAGE */}
    <img
      src={reacthalf}
      className="absolute right-0 top-0 w-[35vw] opacity-20 z-0 pointer-events-none select-none"
    />


      {/* MAIN APP */}
      <App />
    </div>
  </StrictMode>
);
