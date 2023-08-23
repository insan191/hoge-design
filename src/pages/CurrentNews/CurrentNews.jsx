import axios from "axios"
import React, { useEffect, useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { useNavigate, useParams } from "react-router-dom"

const CurrentNews = () => {
	const nav = useNavigate()
	const { id } = useParams()

	const [newsItem, setNewsItem] = useState({})
	const { date, category, title, body } = newsItem

	const numId = Number(id)
	useEffect(() => {
		axios.get(`http://localhost:5555/news/${numId}`).then(({ data }) => {
			setNewsItem(data)
		})
	}, [numId])
	return (
		<section className="section currentNews">
			<div className="container">
				<div className="news__content">
					<span className="news__back" onClick={() => nav("/news")}>
						<MdKeyboardArrowLeft size="50px" />
					</span>
					<div className="news__item is-currentNews">
						<div className="news__item-box">
							<div className="news__item-date">
								<p>{date}</p>
							</div>
							<div className="news__item-category">
								<p>{category}</p>
							</div>
						</div>
						<div className="news__item-ttl is-currentNews">
							<p>{title}</p>
						</div>
						<div className="news__item-txt is-currentNews">
							<p>{body}</p>
						</div>
					</div>
					<div className="news__btns">
						<button
							className="news__btns-item"
							disabled={newsItem.id === 1 ? true : false}
							onClick={() => nav(`/news/${numId - 1}`)}
						>
							<MdKeyboardArrowLeft size="30px" />
						</button>
						<button
							className="news__btns-item"
							disabled={newsItem.id === 10 && true}
							onClick={() => nav(`/news/${numId + 1}`)}
						>
							<MdKeyboardArrowRight size="30px" />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CurrentNews
