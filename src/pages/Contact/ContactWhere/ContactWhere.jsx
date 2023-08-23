import React from "react"

const ContactWhere = ({ register, error }) => {
	return (
		<div className="contact__form-box">
			<div className="contact__form-ttl">
				<h5>HOGEをどちらでお知りになりましたか?</h5>
				<p>*必須</p>
			</div>
			<div className="contact__form-input">
				<select
					className={error && "is-error"}
					{...register("where", {
						validate: v => {
							if (v === "default") {
								return "*必須"
							}
						},
					})}
				>
					<option value="default">選択してください</option>
					<option value="search">Google/Yahoo検索</option>
					<option value="sns">SNS</option>
					<option value="blog">ブログ</option>
					<option value="friends">友人や知人</option>
					<option value="other">その他</option>
				</select>
			</div>
		</div>
	)
}

export default ContactWhere
