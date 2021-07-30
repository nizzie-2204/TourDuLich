import React, { useEffect, useState } from "react";
import BookedTour from "../BookedTour/BookedTour";
import SidebarUser from "../../../../components/User/SidebarUser/SidebarUser";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBookedTours, getSupportExpense } from "../TourSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const BookedTours = () => {
	const dispatch = useDispatch();
	const bookedTours = useSelector((state) => state.tour.bookedTours);
	const [supportExpense, setSupportExpense] = useState(null);

	useEffect(() => {
		const fetchBookedTours = () => {
			const token = localStorage.getItem("userToken");

			const action = getBookedTours(token);
			dispatch(action)
				.then(unwrapResult)

				.catch((error) => console.log(error));
		};

		fetchBookedTours();
	}, []);

	useEffect(() => {
		const fetchSupportExpense = () => {
			const token = localStorage.getItem("userToken");
			const action = getSupportExpense(token);

			dispatch(action)
				.then(unwrapResult)
				.then((result) => {
					setSupportExpense(result?.sotienhotro);
				})
				.catch((error) => console.log(error));
		};

		fetchSupportExpense();
	}, []);

	return (
		<div className="booked-tours">
			<div className="booked-tours__container">
				<div className="booked-tours__content">
					<SidebarUser />
					<div className="booked-tours__list">
						<h3 className="booked-tours__title">
							{bookedTours.length > 0
								? "Các tour đã đặt"
								: "Bạn chưa đặt tour nào"}
						</h3>

						{bookedTours?.map((tour) => {
							return <BookedTour tour={tour} supportExpense={supportExpense} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookedTours;
