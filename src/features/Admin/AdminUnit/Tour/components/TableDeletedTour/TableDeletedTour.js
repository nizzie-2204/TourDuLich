import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeletedTour, restoreDeletedTour } from "../../tourSlice";
import Swal from "sweetalert2";

const TableDeletedTour = () => {
	const deletedTours = useSelector((state) => state.adminTour.deletedTours);
	const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchDeletedTours = () => {
			const action = getDeletedTour();
			dispatch(action);
		};

		fetchDeletedTours();
	}, []);

	const filteredDeletedTours = deletedTours?.filter((tour) => {
		return tour?.donvi?.id === user?.donvi?.id;
	});

	const handleRestoreDeletedTour = (id) => {
		const action = restoreDeletedTour(id);
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Swal.fire({
					title: "Khôi phục tour thành công",
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

	return (
		<div class="tours-table">
			<h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
				{user.ltk_id === 1 ? "Tour đã xóa" : "Tour đã xóa trong đơn vị"}
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
					deletedTours?.map((tour) => {
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
										<b>{tour?.dangkytour.length}</b>/{tour.t_soluong}
									</span>
								</td>
								<td style={{ textAlign: "center " }}>
									<button
										type="button"
										onClick={() => {
											handleRestoreDeletedTour(tour.id);
										}}
										style={{ marginBottom: "5px" }}
									>
										Khôi phục
									</button>
								</td>
							</tr>
						);
					})}

				{/* Admin unit */}
				{user.ltk_id === 2 &&
					filteredDeletedTours?.map((tour) => {
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
										<b>{tour?.dangkytour.length}</b>/{tour.t_soluong}
									</span>
								</td>
								<td style={{ textAlign: "center " }}>
									<button
										type="button"
										onClick={() => {
											handleRestoreDeletedTour(tour.id);
										}}
										style={{ marginBottom: "5px" }}
									>
										Khôi phục
									</button>
								</td>
							</tr>
						);
					})}
			</table>
		</div>
	);
};

export default TableDeletedTour;
