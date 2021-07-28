import React from "react";
import BookedTour from "../BookedTour/BookedTour";
import SidebarUser from "../SidebarUser/SidebarUser";
import "./style.scss";

const BookedTours = () => {
	return (
		<div className="booked-tours">
			<div className="booked-tours__container">
				<div className="booked-tours__content">
					<SidebarUser />
					<div className="booked-tours__list">
						<h3 className="booked-tours__title">Các tour đã đặt</h3>
						<BookedTour />
						<BookedTour />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookedTours;
