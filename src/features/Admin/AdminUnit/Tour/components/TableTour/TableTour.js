import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTour, getBookedTour, getTour, getTours } from "../../tourSlice";
import "./style.scss";
import Swal from "sweetalert2";

const TableTour = () => {
	const dispatch = useDispatch();
	const tours = useSelector((state) => state.adminTour.tours);
	const user = useSelector((state) => state.auth.user);

	useEffect(() => {
		const fetchTours = () => {
			const action = getTours();
			dispatch(action)
				.then(unwrapResult)
				.then((result) => console.log(result))
				.catch((error) => console.log(error));
		};

		fetchTours();
	}, []);

	let filteredTours;
	if (user.donvi) {
		filteredTours = tours?.filter((tour) => {
			return tour?.donvi?.id === user?.donvi?.id;
		});
	}
	console.log(filteredTours);

	const handleDeleteTour = (id) => {
		const action = deleteTour(id);
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Swal.fire({
					title: "Sửa tour thành công",
					icon: "success",
					showConfirmButton: false,
					padding: "2rem 0 3rem 0",
					timer: 2000,
					customClass: {
						title: "alert__title",
					},
				});
			});
	};

	const handleGetTour = (id) => {
		const action = getTour(id);
		dispatch(action);
	};

	return (
		<div class="tours-table">
			<h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
				Tour hiện tại trong đơn vị
			</h3>
			<table>
				<thead>
					<th>Tên tour</th>
					<th>Ngày bắt đầu tour</th>
					<th>Đơn vị mở tour</th>
					<th>Ngày mở đăng ký</th>
					<th>Ngày kết thúc đăng ký</th>
					<th>Số lượng người đăng ký</th>
					<th>Hành động</th>
				</thead>

				{/* Admin system */}
				{user.ltk_id === 1 &&
					tours?.map((tour) => {
						return (
							<tr className={tour.id}>
								<td>{tour.t_ten}</td>
								<td>{tour.t_ngaybatdau}</td>
								<td class="tours__info-donvi">
									<a href="">{tour?.donvi?.dv_ten}</a>
								</td>
								<td>{tour.t_tgbatdaudk}</td>
								<td>{tour.t_tgketthucdk}</td>
								<td class="tours__info-more">
									<span>
										<b>{tour.dangkytour.length}</b>/{tour.t_soluong}
									</span>
								</td>
								<td class="tour__more-info">
									<button
										onClick={() => {
											handleGetTour(tour.id);
										}}
										style={{ marginBottom: "5px" }}
									>
										Sửa
									</button>
									<button
										onClick={() => {
											handleDeleteTour(tour.id);
										}}
										className="button-red"
									>
										Xóa
									</button>
								</td>
							</tr>
						);
					})}

				{/* Admin unit */}
				{user.ltk_id === 2 &&
					filteredTours?.map((tour) => {
						return (
							<tr className={tour.id}>
								<td>{tour.t_ten}</td>
								<td>{tour.t_ngaybatdau}</td>
								<td class="tours__info-donvi">
									<a href="">{tour.donvi.dv_ten}</a>
								</td>
								<td>{tour.t_tgbatdaudk}</td>
								<td>{tour.t_tgketthucdk}</td>
								<td class="tours__info-more">
									<span>
										<b>{tour.dangkytour.length}</b>/{tour.t_soluong}
									</span>
								</td>
								<td style={{ textAlign: "center " }}>
									<button
										onClick={() => {
											handleGetTour(tour.id);
										}}
										style={{ marginBottom: "5px" }}
									>
										Sửa{" "}
									</button>
									<button
										onClick={() => {
											handleDeleteTour(tour.id);
										}}
									>
										Xóa{" "}
									</button>
								</td>
							</tr>
						);
					})}
			</table>
		</div>
	);
};

export default TableTour;
