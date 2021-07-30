import React, { useEffect } from "react";
import BookedTours from "../../features/User/Tour/BookedTours/BookedTours";

import Footer from "../../components/User/Footer/Footer";
import Header from "../../components/User/Header/Header";
import { getBookedTours } from "../../features/User/Tour/TourSlice";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getUserInfo } from "../../features/Auth/authSlice";

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
