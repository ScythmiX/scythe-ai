import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

async function initEruda() {
	if (import.meta.env.DEV) {
		const eruda = await import("eruda");
		eruda.init();
	}
}

async function mountApp() {
	try {
		const App = (await import("./App.jsx")).default;
		createRoot(document.getElementById("root")).render(
			<StrictMode>
				<App />
			</StrictMode>,
		);
	} catch (e) {
		console.error("App failed to load:", e);
	}
}

async function loadCanvas() {
	try {
		const canvasLoader = import.meta.glob("./canvas.js")["./canvas.js"];
		if (canvasLoader) await canvasLoader();
	} catch (e) {
		console.error("Canvas failed to load:", e);
	}
}

await initEruda();
await mountApp();
await loadCanvas();
