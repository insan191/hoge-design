import React from "react"

const HomeEstimatePage = ({ register, error }) => {
	return (
		<div className="homeEstimate__form-box">
			<div className="homeEstimate__form-ttl">
				<h5>想定ページ数</h5>
				<p>*必須</p>
			</div>
			<div className="homeEstimate__form-input">
				<select
					className={error && "is-error"}
					{...register("page", {
						validate: v => {
							if (v === "_") {
								return "*必須"
							}
						},
					})}
				>
					<option value="_">_</option>
					<option value="1">1枚</option>
					<option value="2">2枚</option>
					<option value="3">3枚</option>
				</select>
			</div>
		</div>
	)
}

export default HomeEstimatePage
