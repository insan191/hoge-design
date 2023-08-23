import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "react-router-dom"

const Title = () => {
	const { pathname } = useLocation()

	const handleTitle = () => {
		if (pathname.includes("/news")) {
			return "ニュース | HOGE DESIGN"
		} else if (pathname === "/company") {
			return "会社概要 | HOGE DESIGN"
		} else if (pathname === "/contact") {
			return "お問い合わせ | HOGE DESIGN"
		}
		return "HOGE DESIGN"
	}
	return (
		<Helmet>
			<title>{handleTitle()}</title>
		</Helmet>
	)
}

export default Title
