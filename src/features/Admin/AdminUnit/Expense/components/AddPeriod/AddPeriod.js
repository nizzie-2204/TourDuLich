import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
	addPeriod,
	editPeriod,
	setPeriod,
	unSetPeriod,
} from "../../expenseSlice";
import "./style.scss";
import Swal from "sweetalert2";
import { useEffect } from "react";

const TableExpense = () => {
	const { register, handleSubmit, reset } = useForm();
	const dispatch = useDispatch();
	const period = useSelector((state) => state.adminExpense.period);

	useEffect(() => {
		if (period) {
			const fetchPeriod = () => {
				const action = setPeriod(period);
				dispatch(action);
				console.log("re-render");

				reset();
			};

			fetchPeriod();
		}
	}, [period?.id]);

	const handleAddPeriod = (data, e) => {
		e.preventDefault();

		const action = addPeriod(data);
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Swal.fire({
					title: "Thêm giai đoạn thành công",
					icon: "success",
					showConfirmButton: false,
					padding: "2rem 0 3rem 0",
					timer: 2000,
					customClass: {
						title: "alert__title",
					},
				});

				reset();
			});
	};

	const handleDeletePeriod = () => {
		const action = unSetPeriod();
		dispatch(action);
		reset();
	};

	const handleEditPeriod = (data, e) => {
		e.preventDefault();

		const id = period.id;

		const action = editPeriod({ data, id });
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				const action = unSetPeriod();
				dispatch(action);

				Swal.fire({
					title: "Sửa giai đoạn thành công",
					icon: "success",
					showConfirmButton: false,
					padding: "2rem 0 3rem 0",
					timer: 2000,
					customClass: {
						title: "alert__title",
					},
				});

				reset();
			});
	};

	return (
		<div className="tours-moreinfo">
			<div className="tours-moreinfo-panel">
				<h3 style={{ padding: "20px 0" }}>
					{period ? "Sửa giai đoạn" : "Thêm giai đoạn"}
				</h3>
				{!period ? (
					<form
						class="tours-moreinfo__panel--details"
						onSubmit={handleSubmit(handleAddPeriod)}
					>
						<div>
							<label for="">Từ năm: </label>
							<div>
								<input
									{...register("from", {
										require: true,
										valueAsNumber: true,
									})}
									type="text"
									defaultValue=""
									minLength="4"
									maxLength="4"
								/>
							</div>
						</div>

						<div>
							<label for="">Đến năm: </label>
							<div>
								<input
									{...register("to", {
										require: true,
										valueAsNumber: true,
									})}
									type="text"
									defaultValue=""
									minLength="4"
									maxLength="4"
								/>
							</div>
						</div>
						<button type="submit">Xác nhận</button>
					</form>
				) : (
					<form
						class="tours-moreinfo__panel--details"
						onSubmit={handleSubmit(handleEditPeriod)}
					>
						<div>
							<label for="">Từ năm: </label>
							<div>
								<input
									{...register("from", {
										require: true,
										valueAsNumber: true,
									})}
									type="text"
									defaultValue={period.gd_tunam}
									minLength="4"
									maxLength="4"
								/>
							</div>
						</div>

						<div>
							<label for="">Đến năm: </label>
							<div>
								<input
									{...register("to", {
										require: true,
										valueAsNumber: true,
									})}
									type="text"
									defaultValue={period.gd_dennam}
									minLength="4"
									maxLength="4"
								/>
							</div>
						</div>
						<button type="submit">Xác nhận</button>
						<button type="button" onClick={handleDeletePeriod}>
							Hủy
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default TableExpense;
