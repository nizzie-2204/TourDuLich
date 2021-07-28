import React, { useEffect } from "react";
import BannerTour from "../../components/BannerTour/BannerTour";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TourList from "../../components/TourList/TourList";

const AllTour = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header />
			<BannerTour />
			<TourList />
			<Footer />
		</>
	);
};

export default AllTour;
