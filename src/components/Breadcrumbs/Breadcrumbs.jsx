import React from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import "./breadcrumbs.scss"

const Breadcrumbs = () => {
	const { pathname } = useLocation()
	const { id } = useParams()
	return (
		<div className="breadcrumbs">
			<div className="container">
				<ul className="breadcrumbs__content">
					<li className="breadcrumbs__item">
						<Link to="/">Home</Link>
					</li>
					<li className="breadcrumbs__item">
						<p>{id ? "news" : pathname.replace(new RegExp("/", "g"), "")}</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Breadcrumbs
