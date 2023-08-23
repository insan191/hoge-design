import axios from "axios"
import React, { useEffect, useState } from "react"
import NewsItem from "./NewsItem/NewsItem"
import "./news.scss"

const News = () => {
	const [allNews, setAllNews] = useState([])
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		axios.get(`http://localhost:5555/news`).then(({ data }) => {
			setAllNews([...data])
		})
	}, [])
	const totalPages = Math.ceil(allNews.length / 8)
	const pageNumbers = []
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i)
	}
	const start = (currentPage - 1) * 8
	const end = currentPage * 8
	const currentItems = allNews.slice(start, end)

	return (
		<section className="section news">
			<div className="container">
				<div className="news__content">
					<ul className="news__items">
						{currentItems.map(newsItem => (
							<NewsItem newsItem={newsItem} key={newsItem.id} />
						))}
					</ul>
					<div className="news__btns">
						{pageNumbers.map(item => (
							<button
								className={`news__btns-item ${
									item === currentPage && "is-disabled"
								}`}
								disabled={item === currentPage && true}
								key={item}
								onClick={() => setCurrentPage(item)}
							>
								<p>{item}</p>
							</button>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default News
