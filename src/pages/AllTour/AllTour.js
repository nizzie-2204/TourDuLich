import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BannerTour from "../../components/User/BannerTour/BannerTour";
import Footer from "../../components/User/Footer/Footer";
import Header from "../../components/User/Header/Header";
import TourList from "../../features/User/Tour/TourList/TourList";
import { getTours, getToursByPage } from "../../features/User/Tour/TourSlice";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { totalPages } from "../../utils/common";
import Pagination from "../../components/User/Pagination/Pagination";
import { Redirect, useHistory, useLocation } from "react-router-dom";

const override = css`
	display: block;
	margin: 0 auto;
`;

const AllTour = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const history = useHistory();
	const tours = useSelector((state) => state.tour.tours);
	const toursLoading = useSelector((state) => state.tour.toursLoading);

	// Pagination
	// const [pag, setPag] = useState(null);
	// const [limit, setLimit] = useState(16);
	const [currPage, setCurrPage] = useState(1);
	const [pages, setPages] = useState(0);

	useEffect(() => {
		window.scrollTo(0, 0);
		if (!location.search) {
			// First page

			const fetchTours = () => {
				const action = getTours();
				dispatch(action)
					.then(unwrapResult)
					.then((data) => {
						setPages(Math.ceil(data?.total / data?.per_page));
					})
					.catch((error) => console.log(error));
			};

			fetchTours();
		} else {
			// Navigate to next page

			const fetchToursByPage = () => {
				const action = getToursByPage(parseInt(location.search.slice(-1)));
				dispatch(action)
					.then(unwrapResult)
					.then((data) => {
						console.log(data);
					})
					.catch((error) => console.log(error));
			};

			fetchToursByPage();
		}
	}, [currPage]);

	const handlePaginate = (page) => {
		if (page === 1) {
			setCurrPage(page);
			console.log(page);
			history.push(`/tours`);
		} else {
			setCurrPage(page);
			history.push(`/tours?page=${page}`);
		}
	};

	return (
		<>
			<Header />
			<BannerTour />
			{toursLoading ? (
				<ClipLoader size="35" css={override} />
			) : (
				<TourList tours={tours} />
			)}

			<Pagination totalPages={pages} paginate={handlePaginate} />

			<Footer />
		</>
	);
};

export default AllTour;
