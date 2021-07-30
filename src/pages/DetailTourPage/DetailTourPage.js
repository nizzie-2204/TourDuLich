import React, { useEffect } from "react";
import DetailTour from "../../features/User/Tour/DetailTour/DetailTour";

import Footer from "../../components/User/Footer/Footer";
import Header from "../../components/User/Header/Header";

const DetailTourPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header />
			<DetailTour />
			<Footer />
		</>
	);
};

export default DetailTourPage;
