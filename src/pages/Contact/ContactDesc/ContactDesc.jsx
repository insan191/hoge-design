import React from "react"

const ContactDesc = ({ register, error }) => {
	return (
		<div className="contact__form-box">
			<div className="contact__form-ttl">
				<h5>お問い合わせ内容</h5>
				<p>*必須</p>
			</div>
			<div className="contact__form-input is-desc">
				<textarea
					type="text"
					className={error && "is-error"}
					{...register("desc", {
						required: true,
						maxLength: {
							message: "*最大長は 300 文字です",
							value: 300,
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

export default ContactDesc
