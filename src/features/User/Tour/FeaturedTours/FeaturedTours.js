import { css } from "@emotion/react";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import TourList from "../TourList/TourList";
import { getFeaturedTours } from "../TourSlice";
import "./style.scss";

const override = css`
	display: block;
	margin: 0 auto;
`;

const FeaturedTours = () => {
	const dispatch = useDispatch();
	const featuredTours = useSelector((state) => state.tour.featuredTours);
	const featuredToursLoading = useSelector((state) => state.tour.toursLoading);

	useEffect(() => {
		const fetchFeaturedTours = () => {
			if (featuredTours) {
				console.log("Fetched");
				return;
			} else {
				const action = getFeaturedTours(4);
				dispatch(action)
					.then(unwrapResult)
					.then((data) => console.log(data))
					.catch((error) => console.log(error));
			}
		};

		fetchFeaturedTours();
	}, []);

	return (
		<>
			<div className="featured-tours">
				<div className="featured-tours__container">
					{featuredToursLoading ? (
						<ClipLoader size="35" css={override} />
					) : (
						<div className="featured-tours__content">
							<div className="featured-tours__title">
								<h3 className="tours__title">TOUR TRONG NƯỚC</h3>
								<p className="tours__subtitle">
									Tour du lịch Trong nước tại Evo Tour. Hành hương đầu xuân -
									Tận hưởng bản sắc Việt.
								</p>
							</div>
							<TourList tours={featuredTours} />;
							<Link to="tours" className="featured-tours__see-more">
								Xem tất cả tour
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default FeaturedTours;
