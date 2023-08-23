import React from "react"

const HomeEstimatePresence = ({ register }) => {
	return (
		<div className="homeEstimate__form-box">
			<div className="homeEstimate__form-ttl">
				<h5>フォームの有無</h5>
				<p>*必須</p>
			</div>
			<div className="homeEstimate__form-radio">
				<div className="homeEstimate__form-radioItem">
					<input
						{...register("presence", {
							required: true,
						})}
						type="radio"
						value="20000"
						id="false"
					/>
					<label htmlFor="false">なし</label>
				</div>
				<div className="homeEstimate__form-radioItem">
					<input
						{...register("presence", {
							required: true,
						})}
						type="radio"
						value="40000"
						id="true"
					/>
					<label htmlFor="true">あり</label>
				</div>
			</div>
		</div>
	)
}

export default HomeEstimatePresence
