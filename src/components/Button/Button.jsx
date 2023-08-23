import React from "react"
import { useNavigate } from "react-router-dom"
import "./button.scss"

const Button = ({ btnText, btnStyle, btnType, btnNav, btnDisabled }) => {
	const nav = useNavigate()

	const handleClick = () => {
		if (btnType !== "submit") {
			nav(btnNav)
		}
	}
	return (
		<button
			className={`btn ${btnStyle ? btnStyle : ""}`}
			type={btnType}
			disabled={btnDisabled}
			onClick={handleClick}
		>
			{btnText}
		</button>
	)
}

export default Button
