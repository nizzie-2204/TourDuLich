import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUnit, editUnit, getUnit, unsetUnit } from "../../unitSlice";
import "./style.scss";
import Swal from "sweetalert2";
import { useEffect } from "react";

const AddUnit = () => {
	const dispatch = useDispatch();
	const unit = useSelector((state) => state.unit.unit);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	useEffect(() => {
		// if unit changes (when user clicked edit button in TableUnit component)
		// => fetchUnit again and change default value of unit name and display it
		if (unit) {
			const fetchUnit = () => {
				const action = getUnit(unit.id);
				dispatch(action);
			};

			fetchUnit();

			// Reset to update default value of unit name
			reset();
		}
	}, []);

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

	const handleEditUnit = (data, e) => {
		e.preventDefault();

		const unitData = {
			dv_ten: data.nameUnit,
			id: unit.id,
		};

		const action = editUnit(unitData);
		dispatch(action)
			.then(unwrapResult)
			.then((message) => {
				console.log(message);
				Swal.fire({
					title: "Sửa tên đơn vị thành công",
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

	const handleUnsetUnit = () => {
		const action = unsetUnit();
		dispatch(action);
	};

	return (
		<div className="donvi-add">
			{unit ? <h3>Sửa đơn vị</h3> : <h3>Thêm đơn vị mới</h3>}
			<form
				onSubmit={
					unit ? handleSubmit(handleEditUnit) : handleSubmit(handleAddUnit)
				}
			>
				<label htmlFor="">Tên đơn vị: </label>
				{unit ? (
					<div>
						<input
							id="nameUnit"
							type="text"
							{...register("nameUnit", { required: true })}
							defaultValue={unit.dv_ten}
						/>
						<button type="submit">Sửa</button>
						<button type="button" onClick={handleUnsetUnit}>
							Hủy
						</button>
					</div>
				) : (
					<div>
						<input
							defaultValue=""
							type="text"
							{...register("nameUnit", { required: true })}
						/>
						<button type="submit">Xác nhận</button>
					</div>
				)}
			</form>
		</div>
	);
};

export default AddUnit;
