import React from "react"

const contactType = ({ register }) => {
	return (
		<div className="contact__form-box">
			<div className="contact__form-ttl">
				<h5>お問い合わせ種別</h5>
				<p>*必須</p>
			</div>
			<div className="contact__form-radio">
				<div className="contact__form-radioItem">
					<input
						{...register("type", {
							required: true,
						})}
						type="radio"
						value="application"
						id="application"
					/>
					<label htmlFor="application">お仕事のご依頼・ご相談</label>
				</div>
				<div className="contact__form-radioItem">
					<input
						{...register("type", {
							required: true,
						})}
						type="radio"
						value="recruitment"
						id="recruitment"
					/>
					<label htmlFor="recruitment">採用関連</label>
				</div>
				<div className="contact__form-radioItem">
					<input
						{...register("type", {
							required: true,
						})}
						type="radio"
						value="other"
						id="other"
					/>
					<label htmlFor="other">その他</label>
				</div>
			</div>
		</div>
	)
}

export default contactType
