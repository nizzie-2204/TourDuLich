import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteSupportExpense,
	getInfoPeriod,
	setExpense,
} from "../../expenseSlice";
import "./style.scss";
import Swal from "sweetalert2";

const TableExpense = () => {
	const dispatch = useDispatch();
	const periods = useSelector((state) => state.adminExpense.periods);
	const [expenseFromPeriod, setExpenseFromPeriod] = useState([]);
	const expense = useSelector((state) => state.adminExpense.expense);

	useEffect(() => {
		if (periods) {
			const fetchPeriods = () => {
				const action = getInfoPeriod();
				dispatch(action);
				console.log("render");
			};
			fetchPeriods();
		}
	}, [expense]);

	const handleOnChangePeriod = (e) => {
		const idPeriod = e.target.value;

		const selectedPeriod = periods.find((period) => {
			return period.id === parseInt(idPeriod);
		});

		if (selectedPeriod) {
			setExpenseFromPeriod(selectedPeriod.chitiet);
		}
	};

	const handleEditExpense = (expense) => {
		const action = setExpense(expense);
		dispatch(action);
	};

	const handleDeleteExpense = (id) => {
		const action = deleteSupportExpense(id);
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				setExpenseFromPeriod([]);
				Swal.fire({
					title: "Xóa kinh phí hỗ trợ thành công",
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
		<div class="expense-table">
			<h3 style={{ padding: "20px 0" }}>Thông tin kinh phí theo giai đoạn</h3>
			<h4 style={{ padding: "20px 0" }}>
				Giai đoạn:
				<select onChange={handleOnChangePeriod}>
					{periods &&
						periods.map((item) => {
							return (
								<option value={item.id} key={item.id}>
									{item.gd_tunam} - {item.gd_dennam}
								</option>
							);
						})}
				</select>
			</h4>
			<table>
				<thead>
					<th>Thâm niên từ năm</th>
					<th>Đến năm</th>
					<th>Số tiền hỗ trợ</th>
					<th>Diễn giải</th>
					<th>Sửa/Xóa</th>
				</thead>
				{expenseFromPeriod &&
					expenseFromPeriod?.map((expense) => {
						return (
							<tr>
								<td>{expense.ctgdhotro_tuthamnien}</td>
								<td>{expense.ctgdhotro_denthamnien}</td>
								<td>{expense.ctgdhotro_sotienhotro}</td>
								<td>{expense.ctgdhotro_diengiai}</td>
								<td>
									<button
										type="button"
										onClick={() => {
											handleEditExpense(expense);
										}}
									>
										Sửa
									</button>
									<button
										type="button"
										onClick={() => {
											handleDeleteExpense(expense.id);
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

export default TableExpense;
