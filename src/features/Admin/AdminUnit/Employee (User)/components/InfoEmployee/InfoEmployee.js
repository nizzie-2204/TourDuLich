import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
	addEmployee,
	editEmployee,
	getEmployee,
	unsetEmployee,
} from "../../employeeSlice";
import "./style.scss";
import Swal from "sweetalert2";
import { getUnits } from "../../../../AdminSystem/Unit/unitSlice";

const InfoEmployee = () => {
	const { register, handleSubmit, reset, watch } = useForm();
	const user = useSelector((state) => state.auth.user);
	const units = useSelector((state) => state.unit.units);
	const employee = useSelector((state) => state.employee.employee);
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState(() => {
		if (employee?.nv_gioitinh === "F") {
			return "F";
		} else {
			return "M";
		}
	});
	const [isSelected, setIsSelected] = useState(false);

	const onChange = () => {
		setIsSelected(!isSelected);
		setInputValue(inputValue);
	};

	const [dv_id, setDv_id] = useState(null);
	useEffect(() => {
		// if employee changes (when user clicked edit button in TableEmployee component)
		// => fetchUnit again and change default value of employee  and display it
		if (employee) {
			setDv_id(employee.donvi.id);

			const fetchUnit = () => {
				const action = getEmployee(employee.id);
				dispatch(action);
			};

			fetchUnit();

			// Reset to update default value of employee
			reset();

			console.log(dv_id);
		}
	}, [employee?.id]);

	useEffect(() => {
		const fetchUnit = () => {
			const action = getUnits();
			dispatch(action);
		};

		fetchUnit();
	}, []);

	const handleAddEmployee = (data, e) => {
		e.preventDefault();

		const action = addEmployee(data);
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Swal.fire({
					title: "Thêm nhân viên thành công",
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

	const handleEditInfoEmployee = (data, e) => {
		e.preventDefault();

		const id = employee.id;

		const action = editEmployee({ data, id });
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Swal.fire({
					title: "Sửa thông tin nhân viên thành công",
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

	const handleUnsetEmployee = () => {
		const action = unsetEmployee();
		dispatch(action);
		reset();
	};

	// Admin system
	const [typeAcc, setTypeAcc] = useState(null);

	const handleOnChangeTypeAcc = (e) => {
		setTypeAcc(parseInt(e.target.value));
		console.log(typeof e.target.value);
	};

	const handleOnChangeUnit = (e) => {
		setDv_id(e.target.value);
	};

	return (
		<div class="info-nv">
			<h3>{employee ? "Sửa thông tin nhân viên" : "Thêm nhân viên"}</h3>
			<div class="info-nv__header">
				<div class="info__img">
					<img src="../asset/a.jpg" alt="" />
				</div>

				{/* Admin system */}

				{user.ltk_id === 1 &&
					(employee ? (
						// Edit info employee
						<form
							class="header__basic-info"
							onSubmit={handleSubmit(handleEditInfoEmployee)}
						>
							<div class="info__group">
								<label for="">Họ và tên: </label>
								<input
									defaultValue={employee.nv_ten}
									type="text"
									{...register("nv_ten", { required: true })}
								/>
							</div>
							<div class="info__group">
								<label for="">Năm sinh: </label>
								<input
									defaultValue={employee.nv_namsinh}
									type="text"
									minLength="4"
									maxLength="4"
									{...register("nv_namsinh", {
										required: true,
										valueAsNumber: true,
									})}
								/>
							</div>
							<div class="info__group">
								<label for="">Địa chỉ: </label>
								<input
									{...register("nv_diachi", { required: true })}
									type="text"
									defaultValue={employee.nv_diachi}
								/>
							</div>
							<div class="info__group">
								<label for="">Số điện thoại: </label>
								<input
									defaultValue={employee.nv_sdt}
									type="tel"
									minLength="10"
									maxLength="10"
									{...register("nv_sdt", {
										required: true,
										valueAsNumber: true,
									})}
								/>
							</div>
							<div class="info__group">
								<label for="">Giới tính: </label>
								<div>
									<input
										type="radio"
										checked={inputValue === "M"}
										value="M"
										onClick={() => {
											setInputValue("M");
										}}
										// onChange={onChange}
										{...register("nv_gioitinh", { required: true })}
										style={{ marginRight: "10px" }}
									/>
									<span style={{ marginRight: "15px" }}>Nam</span>
									<input
										type="radio"
										checked={inputValue === "F"}
										value="F"
										onClick={() => {
											setInputValue("F");
										}}
										// onChange={onChange}
										{...register("nv_gioitinh", { required: true })}
										style={{ marginRight: "10px" }}
									/>
									<span>Nữ</span>
								</div>
							</div>

							<div class="info__group">
								<label for="">Đơn vị: </label>
								<select
									value={dv_id}
									style={{ padding: "5px 20px" }}
									{...register("dv_id")}
									onChange={handleOnChangeUnit}
								>
									{units &&
										units.map((unit) => {
											return <option value={unit.id}>{unit.dv_ten}</option>;
										})}
								</select>
							</div>

							{/* Admin system => add admin unit and employee
								Admin unit => add  employee */}
							<div class="info__group">
								<label for="">Loại tài khoản: </label>
								<select
									style={{ padding: "5px 20px" }}
									defaultValue={employee.ltk_id}
									disabled
									{...register("ltk_id")}
								>
									<option value="2">Admin đơn vị</option>
									<option value="3">Nhân viên</option>
								</select>
							</div>

							<div class="info__group--button">
								{/* <button type="button">Cập nhật thông tin</button> */}
								<button type="submit">Xác nhận</button>
								<button type="button" onClick={handleUnsetEmployee}>
									Hủy
								</button>
							</div>
						</form>
					) : (
						// Add employee
						<form
							class="header__basic-info"
							onSubmit={handleSubmit(handleAddEmployee)}
						>
							<div class="info__group">
								<label for="">Họ và tên: </label>
								<input
									defaultValue=""
									type="text"
									{...register("nv_ten", { required: true })}
								/>
							</div>
							<div class="info__group">
								<label for="">Năm sinh: </label>
								<input
									type="text"
									minLength="4"
									maxLength="4"
									{...register("nv_namsinh", {
										required: true,
										valueAsNumber: true,
									})}
									defaultValue=""
								/>
							</div>
							<div class="info__group">
								<label for="">Ngày vào làm: </label>
								<input
									defaultValue=""
									type="date"
									{...register("nv_thoigianvaolam", { required: true })}
								/>
							</div>
							<div class="info__group">
								<label for="">Địa chỉ: </label>
								<input
									{...register("nv_diachi", { required: true })}
									type="text"
									defaultValue=""
								/>
							</div>
							<div class="info__group">
								<label for="">Số điện thoại: </label>
								<input
									defaultValue=""
									type="tel"
									minLength="10"
									maxLength="10"
									{...register("nv_sdt", {
										required: true,
										valueAsNumber: true,
									})}
								/>
							</div>
							<div class="info__group">
								<label for="">Giới tính: </label>
								<div>
									<input
										type="radio"
										value="M"
										{...register("nv_gioitinh", { required: true })}
										style={{ marginRight: "10px" }}
									/>
									<span style={{ marginRight: "15px" }}>Nam</span>
									<input
										type="radio"
										value="F"
										{...register("nv_gioitinh", { required: true })}
										style={{ marginRight: "10px" }}
									/>
									<span>Nữ</span>
								</div>
							</div>

							<div class="info__group">
								<label for="">Đơn vị: </label>
								<select style={{ padding: "5px 20px" }} {...register("dv_id")}>
									{units &&
										units.map((unit) => {
											return <option value={unit.id}>{unit.dv_ten}</option>;
										})}
								</select>
							</div>

							{/* Admin system => add admin unit and employee
								Admin unit => add  employee */}
							<div class="info__group">
								<label for="">Loại tài khoản: </label>
								<select style={{ padding: "5px 20px" }} {...register("ltk_id")}>
									<option value="2">Admin đơn vị</option>
									<option value="3">Nhân viên</option>
								</select>
							</div>
							<div class="info__group--button">
								<button type="submit">Xác nhận</button>
							</div>
						</form>
					))}

				{/* Admin unit */}
				{user.ltk_id === 2 &&
					(employee ? (
						// Edit info employee
						<form
							class="header__basic-info"
							onSubmit={handleSubmit(handleEditInfoEmployee)}
						>
							<div class="info__group">
								<label for="">Họ và tên: </label>
								<input
									defaultValue={employee.nv_ten}
									type="text"
									{...register("nv_ten", { required: true })}
								/>
							</div>
							{user.ltk_td === 1 && (
								<input
									type="hidden"
									{...register("id")}
									value={parseInt(user.donvi.id)}
								/>
							)}

							<div class="info__group">
								<label for="">Năm sinh: </label>
								<input
									defaultValue={employee.nv_namsinh}
									type="text"
									minLength="4"
									maxLength="4"
									{...register("nv_namsinh", {
										required: true,
										valueAsNumber: true,
									})}
								/>
							</div>

							<div class="info__group">
								<label for="">Địa chỉ: </label>
								<input
									{...register("nv_diachi", { required: true })}
									type="text"
									defaultValue={employee.nv_diachi}
								/>
							</div>
							<div class="info__group">
								<label for="">Số điện thoại: </label>
								<input
									defaultValue={employee.nv_sdt}
									type="tel"
									minLength="10"
									maxLength="10"
									{...register("nv_sdt", {
										required: true,
										valueAsNumber: true,
									})}
								/>
							</div>
							<div class="info__group">
								<label for="">Giới tính: </label>
								<div>
									<input
										type="radio"
										checked={inputValue === "M"}
										value="M"
										onClick={() => {
											setInputValue("M");
										}}
										// onChange={onChange}
										{...register("nv_gioitinh", { required: true })}
										style={{ marginRight: "10px" }}
									/>
									<span style={{ marginRight: "15px" }}>Nam</span>
									<input
										type="radio"
										checked={inputValue === "F"}
										value="F"
										onClick={() => {
											setInputValue("F");
										}}
										// onChange={onChange}
										{...register("nv_gioitinh", { required: true })}
										style={{ marginRight: "10px" }}
									/>
									<span>Nữ</span>
								</div>
							</div>

							<div class="info__group--button">
								{/* <button type="button">Cập nhật thông tin</button> */}
								<button type="submit">Xác nhận</button>
								<button type="button" onClick={handleUnsetEmployee}>
									Hủy
								</button>
							</div>
						</form>
					) : (
						// Add employee
						<form
							class="header__basic-info"
							onSubmit={handleSubmit(handleAddEmployee)}
						>
							<div class="info__group">
								<label for="">Họ và tên: </label>
								<input
									defaultValue=""
									type="text"
									{...register("nv_ten", { required: true })}
								/>
							</div>
							<div class="info__group">
								<label for="">Năm sinh: </label>
								<input
									type="text"
									minLength="4"
									maxLength="4"
									{...register("nv_namsinh", {
										required: true,
										valueAsNumber: true,
									})}
									defaultValue=""
								/>
							</div>
							<div class="info__group">
								<label for="">Ngày vào làm: </label>
								<input
									defaultValue=""
									type="date"
									{...register("nv_thoigianvaolam", { required: true })}
								/>
							</div>
							<div class="info__group">
								<label for="">Địa chỉ: </label>
								<input
									{...register("nv_diachi", { required: true })}
									type="text"
									defaultValue=""
								/>
							</div>
							<div class="info__group">
								<label for="">Số điện thoại: </label>
								<input
									defaultValue=""
									type="tel"
									minLength="10"
									maxLength="10"
									{...register("nv_sdt", {
										required: true,
										valueAsNumber: true,
									})}
								/>
							</div>
							<div class="info__group">
								<label for="">Giới tính: </label>
								<div>
									<input
										type="radio"
										value="M"
										{...register("nv_gioitinh", { required: true })}
										style={{ marginRight: "10px" }}
									/>
									<span style={{ marginRight: "15px" }}>Nam</span>
									<input
										type="radio"
										value="F"
										{...register("nv_gioitinh", { required: true })}
										style={{ marginRight: "10px" }}
									/>
									<span>Nữ</span>
								</div>
							</div>
							{/* <div class="info__group">
							<label for="">Đơn vị: </label>
							<input
								type="text"
								value={user.donvi.id}
								{...register("dv_id", { required: true, valueAsNumber: true })}
							/>
						</div> */}

							{/* Admin system => add admin unit and employee
					Admin unit => add  employee */}
							{/* <div class="info__group">
							<label for="">Loại tài khoản: </label>
							<input
								type="number"
								value="2"
								{...register("ltk_id", { required: true, valueAsNumber: true })}
							/>
						</div> */}
							<div class="info__group--button">
								<button type="submit">Xác nhận</button>
							</div>
						</form>
					))}
			</div>
		</div>
	);
};

export default InfoEmployee;
