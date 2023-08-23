import React from "react"

const ContactName = ({ register, error }) => {
	return (
		<div className="contact__form-box">
			<div className="contact__form-ttl">
				<h5>お名前</h5>
				<p>*必須</p>
			</div>
			<div className="contact__form-input">
				<input
					placeholder="愛媛太郎"
					type="text"
					className={error && "is-error"}
					{...register("name", {
						required: true,
						maxLength: {
							message: "*最大長は 30 文字です",
							value: 30,
						},
					})}
				/>
			</div>
			{error && (
				<div className="contact__form-error">
					<p>{error.message}</p>
				</div>
			)}
		</div>
	)
}

export default ContactName
