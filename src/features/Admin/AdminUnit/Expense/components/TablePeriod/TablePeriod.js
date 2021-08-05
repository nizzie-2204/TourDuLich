import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePeriod, getInfoPeriod, setPeriod } from "../../expenseSlice";
import "./style.scss";
import Swal from "sweetalert2";

const SearchExpense = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);
	const periods = useSelector((state) => state.adminExpense.periods);

	useEffect(() => {
		const fetchPeriod = () => {
			const action = getInfoPeriod();
			dispatch(action)
				.then(unwrapResult)
				.catch((error) => console.log(error));
		};

		fetchPeriod();
	}, []);

	// Filter periods
	const filteredPeriod = periods?.filter((item) => {
		return item.dv_id === user.donvi.id;
	});

	const handleSetPeriod = (period) => {
		const action = setPeriod(period);
		dispatch(action);
	};

	const handleDeletePeriodInTable = (id) => {
		const action = deletePeriod(id);
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Swal.fire({
					title: "Xóa giai đoạn thành công",
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
		<div class="period-table">
			<h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
				Các giai đoạn hỗ trợ kinh phí trong đơn vị
			</h3>
			<table>
				<thead>
					<th>Mã giai đoạn</th>
					<th>Từ năm</th>
					<th>Đến năm</th>
					<th>Mã đơn vị</th>
					<th>Sửa/Xóa</th>
				</thead>
				{filteredPeriod &&
					filteredPeriod.map((item) => {
						return (
							<tr className={item.id}>
								<td>{item.id}</td>
								<td>{item.gd_tunam}</td>
								<td>{item.gd_dennam}</td>
								<td>{item.dv_id}</td>
								<td>
									<button
										type="button"
										onClick={() => {
											handleSetPeriod(item);
										}}
									>
										Sửa
									</button>
									<button
										type="button"
										onClick={() => {
											handleDeletePeriodInTable(item.id);
										}}
									>
										Xóa
									</button>
								</td>
							</tr>
						);
					})}
			</table>
		</div>
	);
};

export default SearchExpense;
