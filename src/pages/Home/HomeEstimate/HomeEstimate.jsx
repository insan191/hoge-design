import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Button from "../../../components/Button/Button"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import HomeEstimatePage from "./HomeEstimatePage/HomeEstimatePage"
import HomeEstimatePopup from "./HomeEstimatePopup/HomeEstimatePopup"
import HomeEstimatePresence from "./HomeEstimatePresence/HomeEstimatePresence"
import "./homeEstimate.scss"

const HomeEstimate = () => {
	const [popup, setPopup] = useState(false)
	const [result, setResult] = useState({})

	const {
		handleSubmit,
		register,
		reset,
		formState: { isValid, errors },
	} = useForm({ mode: "onBlur" })

	const handleCalculate = ({ presence, page }) => {
		const number = presence * page
		const percentage = 10
		const sum = `¥${(number + (number * percentage) / 100).toLocaleString(
			"ja"
		)}`
		setResult({ presence, page, sum })
		setPopup(true)
	}
	return (
		<section className="section homeEstimate">
			<SectionTitle title={"estimate"} subtitle={"自動見積もり"} />
			<form
				className="homeEstimate__form"
				onSubmit={handleSubmit(handleCalculate)}
			>
				<HomeEstimatePresence register={register} error={errors.presence} />
				<HomeEstimatePage register={register} error={errors.page} />
				<Button
					btnText={"見積もりする"}
					btnType={"submit"}
					btnDisabled={!isValid}
				/>
				{popup && (
					<HomeEstimatePopup
						result={result}
						setPopup={setPopup}
						reset={reset}
					/>
				)}
			</form>
		</section>
	)
}

export default HomeEstimate
