import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BannerHome from "../../components/User/BannerHome/BannerHome";
import Footer from "../../components/User/Footer/Footer";
import Header from "../../components/User/Header/Header";
import Services from "../../components/User/Services/Services";
import FeaturedTours from "../../features/User/Tour/FeaturedTours/FeaturedTours";

const Home = () => {
	const dispatch = useDispatch();

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
