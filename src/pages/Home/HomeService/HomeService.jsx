import React from "react"
import img1 from "../../../assets/home/img-service01.jpg"
import img2 from "../../../assets/home/img-service02.jpg"
import img3 from "../../../assets/home/img-service03.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import "./homeService.scss"

const HomeService = () => {
	return (
		<div className="section homeService">
			<div className="container">
				<div className="homeService__body">
					<SectionTitle title={"service"} subtitle={"事業内容"} />
					<div className="homeService__items">
						<div className="homeService__item">
							<div className="homeService__item-img">
								<img src={img1} alt="service-img" />
							</div>
							<div className="homeService__item-ttl">
								<h4>Webサイト制作</h4>
							</div>
							<div className="homeService__item-txt">
								<p>
									新規サイトの制作はもちろんサイトリニューアル
									やランディングページの制作も可能です。
								</p>
							</div>
						</div>
						<div className="homeService__item">
							<div className="homeService__item-img">
								<img src={img2} alt="homeService-img" />
							</div>
							<div className="homeService__item-ttl">
								<h4>Webサイト運用</h4>
							</div>
							<div className="homeService__item-txt">
								<p>
									サイトの更新作業や独自のアクセス解析に基づい
									たサイト改善のご提案をいたします。
								</p>
							</div>
						</div>
						<div className="homeService__item">
							<div className="homeService__item-img">
								<img src={img3} alt="homeService-img" />
							</div>
							<div className="homeService__item-ttl">
								<h4>アプリ開発</h4>
							</div>
							<div className="homeService__item-txt">
								<p>
									スマートフォンアプリ開発の他、 Vue.jsやReact
									によるWebアプリの開発が可能です。
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeService
