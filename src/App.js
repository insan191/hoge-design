import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout.jsx"
import Company from "./pages/Company/Company.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import CurrentNews from "./pages/CurrentNews/CurrentNews.jsx"
import Home from "./pages/Home/Home.jsx"
import News from "./pages/News/News.jsx"

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="" element={<Home />} />
				<Route path="company" element={<Company />} />
				<Route path="news" element={<News />} />
				<Route path="news/:id" element={<CurrentNews />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<Navigate to={""} />} />
			</Route>
		</Routes>
	)
}

export default App
