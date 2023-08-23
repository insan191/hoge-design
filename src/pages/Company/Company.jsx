import React from "react"
import CompanyInfo from "../../components/CompanyInfo/CompanyInfo"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import CompanyProfile from "./CompanyProfile/CompanyProfile"
import "./company.scss"

const Company = () => {
	return (
		<>
			<section className="section companyDesc">
				<SectionTitle title={"メッセージ"} />
				<CompanyInfo />
			</section>
			<CompanyProfile />
		</>
	)
}

export default Company
