import React from "react"
import { Link } from "react-router-dom"
import "./footer.scss"

const Footer = () => {
	return (
		<footer className="footer">
			<ul className="footer__menu">
				<li className="footer__menu-item">
					<Link to="/news">お知らせ</Link>
				</li>
				<li className="footer__menu-item">
					<Link to="/company">会社概要</Link>
				</li>
				<li className="footer__menu-item">
					<Link to="/contact">お問い合わせ</Link>
				</li>
			</ul>
			<div className="footer__copyright">
				<p>
					<span>&copy;</span> Hoge design
				</p>
			</div>
		</footer>
	)
}

export default Footer
