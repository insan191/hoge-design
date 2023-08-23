import React from "react"

const ContactEmail = ({ register, error }) => {
	return (
		<div className="contact__form-box">
			<div className="contact__form-ttl">
				<h5>メールアドレス</h5>
				<p>*必須</p>
			</div>
			<div className="contact__form-input">
				<input
					placeholder="hoge@example.com"
					type="text"
					className={error && "is-error"}
					{...register("email", {
						required: true,
						maxLength: {
							message: "*最大長は 30 文字です",
							value: 50,
						},
						pattern: {
							message: "*正しい形式でメールを書く",
							value:
								/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
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

export default ContactEmail
