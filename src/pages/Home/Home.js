import React, { useEffect } from "react";
import BannerHome from "../../components/User/BannerHome/BannerHome";
import Header from "../../components/User/Header/Header";
import Services from "../../components/User/Services/Services";
import FeaturedTours from "../../features/User/Tour/FeaturedTours/FeaturedTours";
import Footer from "../../components/User/Footer/Footer";
const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header />
			<BannerHome />
			<Services />
			<FeaturedTours />
			<Footer />
		</>
	);
};

export default Home;
