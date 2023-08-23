import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs"
import "../style.scss"
import ContactSection from "./ContactSection/ContactSection"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Nav from "./Nav/Nav"
const Layout = () => {
	const { pathname } = useLocation()
	return (
		<div className="layout">
			<Nav />
			<Header />
			<main className="main">
				{pathname !== "/" && <Breadcrumbs />}
				<Outlet />
				{pathname !== "/contact" && <ContactSection />}
			</main>
			<Footer />
		</div>
	)
}

export default Layout
