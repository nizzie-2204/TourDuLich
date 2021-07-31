import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUnit } from "../../unitSlice";
import "./style.scss";
import Swal from "sweetalert2";

const AddUnit = () => {
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const handleAddUnit = (data, e) => {
		e.preventDefault();

		const name = data.nameUnit;
		const action = addUnit(name);
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Swal.fire({
					title: "Thêm đơn vị thành công",
					icon: "success",
					showConfirmButton: false,
					padding: "2rem 0 3rem 0",
					timer: 2000,
					customClass: {
						title: "alert__title",
					},
				});

				reset();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div class="donvi-add">
			<h3>Thêm đơn vị mới</h3>
			<form onSubmit={handleSubmit(handleAddUnit)}>
				<label for="">Tên đơn vị: </label>
				<div>
					<input type="text" {...register("nameUnit", { required: true })} />
					<button type="submit">Xác nhận</button>
				</div>
			</form>
		</div>
	);
};

export default AddUnit;
