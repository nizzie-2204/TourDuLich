import React from "react";
import "./style.scss";
import TourList from "../TourList/TourList";
import { Link } from "react-router-dom";

const FeaturedTours = () => {
	return (
		<div className="featured-tours">
			<div className="featured-tours__container">
				<div className="featured-tours__content">
					<div className="featured-tours__title">
						<h3 className="tours__title">TOUR TRONG NƯỚC</h3>
						<p className="tours__subtitle">
							Tour du lịch Trong nước tại Evo Tour. Hành hương đầu xuân - Tận
							hưởng bản sắc Việt.
						</p>
					</div>
					<TourList />
					<Link to="tours" className="featured-tours__see-more">
						Xem tất cả tour
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FeaturedTours;
