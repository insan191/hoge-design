import React from "react"
import ReactInputMask from "react-input-mask"

const ContactPhone = ({ register, error }) => {
	return (
		<div className="contact__form-box">
			<div className="contact__form-ttl">
				<h5>お電話番号</h5>
			</div>
			<div className="contact__form-input">
				<ReactInputMask
					type="tel"
					className={error && "is-error"}
					mask={"99999999999"}
					maskChar=""
					{...register("phone", {
						pattern: {
							value: /^\d{11}$/,
							message: "*電話番号を正しい形式で入力してください",
						},
					})}
					placeholder="999999999"
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

export default ContactPhone
