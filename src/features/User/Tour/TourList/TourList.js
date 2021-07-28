import React from "react";
import Tour from "../Tour/Tour";
import "./style.scss";

const TourList = () => {
	return (
		<div className="tours-list">
			<div className="tours-list__container">
				<div className="tours-list__content">
					<Tour />
				</div>
			</div>
		</div>
	);
};

export default TourList;
