import { createRoot } from "react-dom/client";
import * as XLSX from "xlsx";
import App from "./App.jsx";

window.XLSX = XLSX;

createRoot(document.getElementById("root")).render(
  <App />,
);
