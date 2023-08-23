import React from "react"
import HomeCompany from "./HomeCompany/HomeCompany"
import HomeEstimate from "./HomeEstimate/HomeEstimate"
import HomeService from "./HomeService/HomeService"

const Home = () => {
	return (
		<>
			<HomeService />
			<HomeCompany />
			<HomeEstimate />
		</>
	)
}

export default Home
