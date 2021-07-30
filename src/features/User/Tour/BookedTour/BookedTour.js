import React from "react";
import "./style.scss";
import { formatDate, formatPrice } from "../../../../utils/common";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { cancelTour } from "../TourSlice";

const BookedTour = ({ tour, supportExpense }) => {
	const bookedTours = useSelector((state) => state.tour.bookedTours);
	const dispatch = useDispatch();

	const handleCancelTour = () => {
		const token = localStorage.getItem("userToken");
		const id = tour?.id;

		const action = cancelTour({ id, token });
		dispatch(action)
			.then(unwrapResult)
			.then((message) => console.log(message))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		console.log(bookedTours);
	}, [bookedTours]);

	return (
		<div className="booked-tours__item">
			<div className="booked-tours__item-id">ID: {tour?.tour?.id}</div>
			<div className="booked-tours__item-desc">
				<h5 className="booked-tours__item-name">{tour?.tour?.t_ten}</h5>
				<div className="booked-tours__item-time">
					<div>
						Ngày bắt đầu tour:{" "}
						<span>{formatDate(tour?.tour?.t_ngaybatdau)}</span>
					</div>
					<div>
						Ngày kết thúc tour:{" "}
						<span>{formatDate(tour?.tour?.t_ngayketthuc)}</span>
					</div>
				</div>
			</div>
			<div className="booked-tours__item-price">
				Tổng tiền: {formatPrice(tour?.tour?.t_gia - supportExpense)}
				{/* Phí hỗ trợ: {formatPrice(supportExpense)} */}
			</div>
			<div className="booked-tours__cancel" onClick={handleCancelTour}>
				Hủy tour
			</div>
		</div>
	);
};
export default BookedTour;
