import React, { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import "./nav.scss"

const Nav = () => {
	// scroll
	const [scroll, setScroll] = useState(false)
	useEffect(() => {
		const scrollFunction = () => {
			const isScroll =
				document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
			if (isScroll) {
				setScroll(true)
			} else {
				setScroll(false)
			}
		}
		window.addEventListener("scroll", () => {
			scrollFunction()
		})
	})

	//menu
	const [menu, setMenu] = useState(false)
	const handleMenu = () => {
		setMenu(prev => !prev)
	}
	const handleClickLink = () => {
		setMenu(false)
	}
	return (
		<nav className={`nav ${scroll && "is-scroll"}`}>
			<Link className="nav__logo" to={"/"}>
				<h1>Hoge design</h1>
			</Link>
			<div
				className={`nav__menu-btn ${menu && "is-active"}`}
				onClick={handleMenu}
			>
				<span></span>
			</div>
			<div className={`nav__menu ${menu && "is-active"}`}>
				<ul className="nav__menu-list">
					<li className="nav__menu-item">
						<Link to="/news" onClick={handleClickLink}>
							お知らせ
						</Link>
					</li>
					<li className="nav__menu-item">
						<Link to="/company" onClick={handleClickLink}>
							会社概要
						</Link>
					</li>
					<li className="nav__menu-item">
						<Link to="/contact" onClick={handleClickLink}>
							お問い合わせ
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Nav
