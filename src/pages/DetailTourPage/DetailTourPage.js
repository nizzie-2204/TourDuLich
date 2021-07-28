import React, { useEffect } from "react";
import DetailTour from "../../components/DetailTour/DetailTour";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

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
