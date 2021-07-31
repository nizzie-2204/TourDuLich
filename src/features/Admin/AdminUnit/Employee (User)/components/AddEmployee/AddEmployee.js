import React from "react";
import "./style.scss";

const AddEmployee = () => {
	return (
		<div class="add-nhanvien">
			<h3>Thêm nhân viên</h3>
			<form action="" name="nhanvien" class="form-add-nhanvien">
				<div class="form-add-nhanvien__group">
					<label for="addNhanvienTen">
						Tên nhân viên <i>(*)</i>:{" "}
					</label>
					<input
						type="text"
						name="addNhanvienTen"
						id="addNhanvienTen"
						placeholder="Nhập tên nhân viên"
						required
					/>
				</div>
				<div class="form-add-nhanvien__group">
					<label for="addNhanvienDV">
						Đơn vị <i>(*)</i>:
					</label>
					<select name="addNhanvienDV" id="addNhanvienDV">
						<option value="1">Đơn vị 1</option>
						<option value="2">Đơn vị 2</option>
						<option value="3">Đơn vị 3</option>
					</select>
				</div>
				<div class="form-add-nhanvien__group">
					<label for="addNhanvienTK">Tài khoản: </label>
					<input
						type="text"
						name="addNhanvienTK"
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
