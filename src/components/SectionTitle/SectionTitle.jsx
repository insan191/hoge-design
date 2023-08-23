import React from "react"
import "./sectionTitle.scss"
const SectionTitle = ({ title, subtitle }) => {
	return (
		<div className="section__ttl">
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
		</div>
	)
}

export default SectionTitle
