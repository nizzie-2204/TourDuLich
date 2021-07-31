import React from "react";
import "./style.scss";

const SearchEmployee = () => {
	return (
		<div class="nhanvien-timkiem">
			<label for="timKiemNV">Tìm nhân viên: </label>
			<input
				type="text"
				id="timKiemNV"
				name="timKiemNV"
				placeholder="Nhập tên hoặc ID nhân viên"
			/>
			<button>
				<i class="fas fa-search"></i>
			</button>
		</div>
	);
};

export default SearchEmployee;
