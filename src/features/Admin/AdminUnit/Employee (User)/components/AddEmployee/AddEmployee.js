import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import "./style.scss";

const AddEmployee = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const user = useSelector((state) => state.auth.user);

	const handleAddEmployee = (data, e) => {
		e.preventDefault();

		console.log(data);
	};
	return (
		<div class="add-nhanvien">
			<h3>Thêm nhân viên</h3>
			<form
				onSubmit={handleSubmit(handleAddEmployee)}
				name="nhanvien"
				class="form-add-nhanvien"
			>
				<div class="form-add-nhanvien__group">
					<label for="addNhanvienTen">
						Tên nhân viên <i>(*)</i>:{" "}
					</label>
					<input
						{...register("nameUnit", { required: true })}
						type="text"
						id="addNhanvienTen"
						placeholder="Nhập tên nhân viên"
					/>
				</div>
				<div class="form-add-nhanvien__group">
					<label for="addNhanvienTK">Tài khoản: </label>
					<input
						{...register("username", { required: true })}
						type="text"
						id="addNhanvienTK"
						placeholder="Nhập tài khoản (nếu có)"
					/>
				</div>
				<div class="form-add-nhanvien__group">
					<label for="addNhanvienTK">Tài khoản: </label>
					<input
						{...register("username", { required: true })}
						type="text"
						id="addNhanvienTK"
						placeholder="Nhập tài khoản (nếu có)"
					/>
				</div>
				<div class="form-add-nhanvien__group">
					<label for="addNhanvienTK">Tài khoản: </label>
					<input
						{...register("username", { required: true })}
						type="text"
						id="addNhanvienTK"
						placeholder="Nhập tài khoản (nếu có)"
					/>
				</div>
				<div class="form-add-nhanvien__group">
					<label for="addNhanvienTK">Tài khoản: </label>
					<input
						{...register("username", { required: true })}
						type="text"
						id="addNhanvienTK"
						placeholder="Nhập tài khoản (nếu có)"
					/>
				</div>
				<div class="form-add-nhanvien__group">
					<label for="addNhanvienTK">Tài khoản: </label>
					<input
						{...register("username", { required: true })}
						type="text"
						id="addNhanvienTK"
						placeholder="Nhập tài khoản (nếu có)"
					/>
				</div>
				<div class="form-add-nhanvien__group">
					<label for="addNhanvienDV">
						Đơn vị <i>(*)</i>:
					</label>
					<input
						{...register("unit", { required: true })}
						type="text"
						id="addNhanvienTen"
						value={user.donvi.dv_ten}
					/>
				</div>
				<div class="form-add-nhanvien__group">
					<label for="addNhanvienTK">Tài khoản: </label>
					<input
						{...register("username", { required: true })}
						type="text"
						id="addNhanvienTK"
						placeholder="Nhập tài khoản (nếu có)"
					/>
				</div>
				<div class="form-add-nhanvien__group">
					<button type="submit">Xác nhận</button>
					<button type="button" class="button-red">
						Nhập lại
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddEmployee;
