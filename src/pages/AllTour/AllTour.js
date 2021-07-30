import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BannerTour from "../../components/User/BannerTour/BannerTour";
import Footer from "../../components/User/Footer/Footer";
import Header from "../../components/User/Header/Header";
import TourList from "../../features/User/Tour/TourList/TourList";
import { getTours } from "../../features/User/Tour/TourSlice";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
	display: block;
	margin: 0 auto;
`;

const AllTour = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const dispatch = useDispatch();
	const tours = useSelector((state) => state.tour.tours);
	const toursLoading = useSelector((state) => state.tour.toursLoading);

	useEffect(() => {
		const fetchTours = () => {
			const action = getTours(23);
			dispatch(action)
				.then(unwrapResult)
				.then((data) => console.log(data))
				.catch((error) => console.log(error));
		};

		fetchTours();
	}, []);

	return (
		<>
			<Header />
			<BannerTour />
			{toursLoading ? (
				<ClipLoader size="35" css={override} />
			) : (
				<TourList tours={tours} />
			)}
			<Footer />
		</>
	);
};

export default AllTour;
