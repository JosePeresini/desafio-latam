import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/reset.css";
import "./assets/css/index.css";
import "./assets/css/App.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
