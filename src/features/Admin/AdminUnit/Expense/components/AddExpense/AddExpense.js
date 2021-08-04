import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
	addSupportExpense,
	editSupportExpense,
	setExpense,
	unSetExpense,
} from "../../expenseSlice";
import Swal from "sweetalert2";
import { useEffect } from "react";

const AddExpense = () => {
	const periods = useSelector((state) => state.adminExpense.periods);
	const { register, handleSubmit, reset } = useForm();
	const dispatch = useDispatch();
	const expense = useSelector((state) => state.adminExpense.expense);

	useEffect(() => {
		if (expense) {
			const fetchExpense = () => {
				const action = dispatch(setExpense(expense));
				dispatch(action);
				reset();
			};

			fetchExpense();
		}
	}, [expense?.id]);

	const handleAddSupportExpense = (data, e) => {
		e.preventDefault();

		const action = addSupportExpense(data);
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Swal.fire({
					title: "Thêm kinh phí hỗ trợ thành công",
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

	const handleUnsetExpense = () => {
		const action = unSetExpense();
		dispatch(action);
		reset();
	};

	const handleEditSupportExpense = (data, e) => {
		e.preventDefault();
		const id = expense.id;
		const action = editSupportExpense({ data, id });
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Swal.fire({
					title: "Sửa kinh phí hỗ trợ thành công",
					icon: "success",
					showConfirmButton: false,
					padding: "2rem 0 3rem 0",
					timer: 2000,
					customClass: {
						title: "alert__title",
					},
				});

				reset();

				const action = unSetExpense();
				dispatch(action);
			});
	};

	return (
		<div className="tours-moreinfo">
			<div className="tours-moreinfo-panel">
				<h3 style={{ padding: "20px 0" }}>
					{expense ? "Sửa thông tin kinh phí" : "Thêm thông tin kinh phí"}
				</h3>
				{!expense ? (
					<form
						class="tours-moreinfo__panel--details"
						onSubmit={handleSubmit(handleAddSupportExpense)}
					>
						<div>
							<label for="">Từ thâm niên (năm): </label>
							<div>
								<input
									{...register("seniorityFrom", {
										require: true,
										valueAsNumber: true,
									})}
									type="text"
									defaultValue=""
									minLength="1"
									maxLength="1"
								/>
							</div>
						</div>
						<div>
							<label for="">Đến thâm niên (năm): </label>
							<div>
								<input
									{...register("seniorityTo", {
										require: true,
										valueAsNumber: true,
									})}
									type="text"
									defaultValue=""
									minLength="1"
									maxLength="1"
								/>
							</div>
						</div>
						<div>
							<label for="">Số tiền hỗ trợ: </label>
							<div>
								<input
									{...register("supportExpense", {
										require: true,
										valueAsNumber: true,
									})}
									type="text"
									defaultValue=""
								/>
							</div>
						</div>
						<div>
							<label for="">Diễn giải: </label>
							<div>
								<input
									{...register("desc", {
										require: true,
									})}
									type="text"
									defaultValue=""
								/>
							</div>
						</div>
						<div>
							<label for="">Gian đoạn: </label>
							<div>
								<select
									{...register("period", {
										required: "select one option",
									})}
								>
									{periods &&
										periods.map((item) => {
											return (
												<option value={item.id}>
													{item.gd_tunam} - {item.gd_dennam}
												</option>
											);
										})}
								</select>
							</div>
						</div>

						<button type="submit">Xác nhận</button>
					</form>
				) : (
					<form
						class="tours-moreinfo__panel--details"
						onSubmit={handleSubmit(handleEditSupportExpense)}
					>
						<div>
							<label for="">Từ thâm niên (năm): </label>
							<div>
								<input
									{...register("seniorityFrom", {
										require: true,
										valueAsNumber: true,
									})}
									type="text"
									defaultValue={expense.ctgdhotro_tuthamnien}
									minLength="1"
									maxLength="1"
								/>
							</div>
						</div>
						<div>
							<label for="">Đến thâm niên (năm): </label>
							<div>
								<input
									{...register("seniorityTo", {
										require: true,
										valueAsNumber: true,
									})}
									type="text"
									defaultValue={expense.ctgdhotro_denthamnien}
									minLength="1"
									maxLength="1"
								/>
							</div>
						</div>
						<div>
							<label for="">Số tiền hỗ trợ: </label>
							<div>
								<input
									{...register("supportExpense", {
										require: true,
										valueAsNumber: true,
									})}
									type="text"
									defaultValue={expense.ctgdhotro_sotienhotro}
								/>
							</div>
						</div>
						<div>
							<label for="">Diễn giải: </label>
							<div>
								<input
									{...register("desc", {
										require: true,
									})}
									type="text"
									defaultValue={expense.ctgdhotro_diengiai}
								/>
							</div>
						</div>

						<button type="submit">Xác nhận</button>
						<button type="button" onClick={handleUnsetExpense}>
							Hủy
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default AddExpense;
