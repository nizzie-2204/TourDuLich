import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTour, getBookedTour, getTour, getTours } from "../../tourSlice";
import "./style.scss";

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

	const filteredTours = tours?.filter((tour) => {
		return tour.donvi.id === user.donvi.id;
	});

	console.log(filteredTours);

	const handleDeleteTour = (id) => {
		const action = deleteTour(id);
		dispatch(action);
	};

	const handleGetTour = (id) => {
		const action = getTour(id);
		dispatch(action);
	};

	return (
		<div class="tours-table">
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
				{filteredTours &&
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
