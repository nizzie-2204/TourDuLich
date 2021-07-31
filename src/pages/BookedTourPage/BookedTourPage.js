import React, { useEffect } from "react";
import Footer from "../../components/User/Footer/Footer";
import Header from "../../components/User/Header/Header";
import BookedTours from "../../features/User/Tour/BookedTours/BookedTours";

const BookedTourPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header />
			<BookedTours />
			<Footer />
		</>
	);
};

export default BookedTourPage;
