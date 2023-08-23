import React from "react"
import Button from "../../components/Button/Button"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import "./contactSection.scss"

const ContactSection = () => {
	return (
		<section className="section contactSection">
			<SectionTitle title={"Contact"} subtitle={"お問い合わせ"} />
			<div className="contactSection__txt">
				<p> Webサイトの制作のご依頼やお見積りなど、 お気軽にご相談ください。</p>
			</div>
			<Button btnText={"More"} btnNav={"/contact"} />
		</section>
	)
}

export default ContactSection
