import React from "react"
import { useNavigate } from "react-router-dom"

const NewsItem = ({ newsItem: { date, category, title, id } }) => {
	const nav = useNavigate()
	const handleClick = () => {
		nav(`/news/${id}`)
	}
	return (
		<li className="news__item" onClick={handleClick}>
			<div className="news__item-box">
				<div className="news__item-date">
					<p>{date}</p>
				</div>
				<div className="news__item-category">
					<p>{category}</p>
				</div>
			</div>
			<div className="news__item-ttl">
				<p>{title}</p>
			</div>
		</li>
	)
}

export default NewsItem
