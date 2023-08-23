import React from "react"
import { useLocation, useParams } from "react-router-dom"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import slide1 from "../../assets/header/bac-header01.jpg"
import slide2 from "../../assets/header/bac-header02.jpg"
import slide3 from "../../assets/header/bac-header03.jpg"
import Button from "../../components/Button/Button"
import "./header.scss"
const Header = () => {
	const { pathname } = useLocation()
	const { id } = useParams()
	if (pathname === "/") {
		return (
			<header className="header is-home">
				<div className="header__content is-home">
					<div className="header__ttl is-home">
						<h2>
							お客様の夢を叶える <br />
							Webサイトを制作
						</h2>
					</div>
					<Button
						btnText={"contact"}
						btnStyle={"is-outline"}
						btnNav={"/contact"}
					/>
				</div>
				<div className="header__swiper">
					<Swiper
						pagination={{ clickable: true }}
						modules={[Pagination]}
						className="mySwiper"
					>
						<SwiperSlide>
							<div className="header__slide">
								<img src={slide1} alt="slide1" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="header__slide">
								<img src={slide2} alt="slide2" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="header__slide">
								<img src={slide3} alt="slide3" />
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</header>
		)
	} else {
		return (
			<header className="header">
				<div className="header__content">
					<div className="header__ttl">
						<h2>{id ? "news" : pathname.replace(new RegExp("/", "g"), "")}</h2>
						<h3>
							{pathname === "/company"
								? "私たちについて"
								: pathname.includes("/news")
								? "お知らせ"
								: pathname === "/contact"
								? "お問い合わせ"
								: ""}
						</h3>
					</div>
				</div>
			</header>
		)
	}
}

export default Header
