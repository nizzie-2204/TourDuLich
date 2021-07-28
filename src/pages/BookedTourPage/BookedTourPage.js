import React, { useEffect } from "react";
import BookedTours from "../../components/BookedTours/BookedTours";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

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
