import React from "react"
import Button from "../../../components/Button/Button"
import CompanyInfo from "../../../components/CompanyInfo/CompanyInfo"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import "./homeCompany.scss"

const HomeCompany = () => {
	return (
		<section className="section homeCompany">
			<SectionTitle title={"company"} subtitle={"私たちについて"} />
			<CompanyInfo />
			<Button btnText={"more"} btnNav={"/company"} />
		</section>
	)
}

export default HomeCompany
