import React from "react";
import Tour from "../Tour/Tour";
import "./style.scss";

const TourList = ({ tours }) => {
	return (
		<div className="tours-list">
			<div className="tours-list__container">
				<div className="tours-list__content">
					{tours?.map((tour) => {
						return <Tour tour={tour} key={tour.id} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default TourList;
