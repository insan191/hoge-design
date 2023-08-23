import React, { useState } from "react"

const HomeEstimatePopup = ({
	result: { sum, page, presence },
	setPopup,
	reset,
}) => {
	const [isCopied, setIsCopied] = useState(false)

	const now = new Date()
	const jaDate = `${now.getFullYear()}年${now.getMonth()}月${now.getDay()}`

	const handleCopy = () => {
		const copyResult = `フォームの有無:${presence}\n想定ページ: ${page}枚\n合計金額 (税込): ${sum}\n(見積もり日時: ${jaDate} )`
		navigator.clipboard.writeText(copyResult)
		setIsCopied(true)
		setTimeout(() => {
			setIsCopied(false)
			reset()
			setPopup(false)
		}, "3000")
	}

	const handleClosePopup = e => {
		if (e.target.className === "homeEstimate__bac") {
			reset()
			setPopup(false)
		}
	}
	return (
		<div className="homeEstimate__bac" onClick={handleClosePopup}>
			<div className="homeEstimate__popup">
				{isCopied ? (
					<div className="homeEstimate__popup-copy is-Copied">
						<p>コピーされました !</p>
					</div>
				) : (
					<>
						<div className="homeEstimate__popup-ttl">
							<h5>合計金額 (税込)</h5>
						</div>
						<div className="homeEstimate__popup-sum">
							<p>{sum}</p>
						</div>
						<div className="homeEstimate__popup-date">
							<p>見積もり日: {jaDate}</p>
						</div>
						<div className="homeEstimate__popup-copy">
							<p onClick={handleCopy}>クリップボードにコピーする</p>
						</div>
					</>
				)}
			</div>
		</div>
	)
}
export default HomeEstimatePopup
