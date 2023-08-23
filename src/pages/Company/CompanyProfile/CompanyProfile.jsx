import React from "react"
import pcMap from "../../../assets/company/img-pcMap.png"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"

const CompanyProfile = () => {
	return (
		<section className="section companyProfile">
			<div className="container">
				<SectionTitle title={"会社概要"} />
				<ul className="companyProfile__items">
					<li className="companyProfile__item">
						<div className="companyProfile__ttl">
							<h5>社名</h5>
						</div>
						<div className="companyProfile__txt">
							<p>株式会社HOGE DESIGN</p>
						</div>
					</li>
					<li className="companyProfile__item">
						<div className="companyProfile__ttl">
							<h5>設立</h5>
						</div>
						<div className="companyProfile__txt">
							<p>2020.01.10</p>
						</div>
					</li>
					<li className="companyProfile__item">
						<div className="companyProfile__ttl">
							<h5>代表取締役</h5>
						</div>
						<div className="companyProfile__txt">
							<p>ホゲ太郎</p>
						</div>
					</li>
					<li className="companyProfile__item">
						<div className="companyProfile__ttl">
							<h5>資本金</h5>
						</div>
						<div className="companyProfile__txt">
							<p>1,000,000</p>
						</div>
					</li>
					<li className="companyProfile__item">
						<div className="companyProfile__ttl">
							<h5>所在地</h5>
						</div>
						<div className="companyProfile__txt">
							<p>〒791-1101 愛媛県松山市久米窪田町487-2</p>
						</div>
					</li>
				</ul>
				<div className="companyProfile__map">
					<img src={pcMap} alt="map" />
					<div className="companyProfile__map-txt">
						<p>Google mapで見る</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CompanyProfile
