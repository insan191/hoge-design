import React from "react"
import { useForm } from "react-hook-form"
import Button from "../../components/Button/Button"
import ContactDesc from "./ContactDesc/ContactDesc"
import ContactEmail from "./ContactEmail/ContactEmail"
import ContactName from "./ContactName/ContactName"
import ContactPhone from "./ContactPhone/ContactPhone"
import ContactType from "./ContactType/ContactType"
import ContactWhere from "./ContactWhere/ContactWhere"
import "./contact.scss"
const Contact = () => {
	const {
		handleSubmit,
		register,
		reset,
		setValue,
		formState: { errors, isValid },
	} = useForm({ mode: "onBlur" })

	const handleSend = () => {
		window.open("https://www.pricer.co.jp/", "_blank")
		reset()
		setValue("phone", "")
	}
	return (
		<div className="section contact">
			<div className="container">
				<div className="contact__ttl">
					<h3>Webサイトの制作のご依頼など、 お気軽にご相談ください。</h3>
				</div>
				<form className="contact__form" onSubmit={handleSubmit(handleSend)}>
					<ContactType register={register} error={errors.type} />
					<ContactName register={register} error={errors.name} />
					<ContactEmail register={register} error={errors.email} />
					<ContactPhone register={register} error={errors.phone} />
					<ContactDesc register={register} error={errors.desc} />
					<ContactWhere register={register} error={errors.where} />
					<Button
						btnType={"submit"}
						btnText={"確認するs"}
						btnDisabled={!isValid}
					/>
				</form>
			</div>
		</div>
	)
}

export default Contact
