import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop"
import Title from "./utils/Title/Title"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<BrowserRouter>
		<Title />
		<ScrollToTop />
		<App />
	</BrowserRouter>
)
