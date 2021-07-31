import React from "react";
import "./style.scss";

const TableEmployee = () => {
	return (
		<table className="table-employee">
			<thead>
				<th>Mã nhân viên</th>
				<th>Tên nhân viên</th>
				<th>Ngày vào làm</th>
				<th>Thông tin đơn vị</th>
				<th>Thông tin tài khoản</th>
				<th>Thông tin liên lạc</th>
				<th>Chỉnh sửa thông tin</th>
			</thead>
			<tr>
				<td>1</td>
				<td>ABC</td>
				<td>
					<span>05/2010</span>
				</td>
				<td>Đơn vị A</td>
				<td>abcusernam</td>
				<td>0123456989</td>
				<td>
					<button>Chi tiết</button>
					<button class="button-red nhanvien__button-del">Xóa</button>
				</td>
			</tr>
			<tr>
				<td>1</td>
				<td>CCC</td>
				<td>
					<span>05/2010</span>
				</td>
				<td>Đơn vị B</td>
				<td>
					<span style={{ color: "red" }}>None</span>
				</td>
				<td>0123456989</td>
				<td>
					<button>Chi tiết</button>
					<button class="button-red nhanvien__button-del">Xóa</button>
				</td>
			</tr>
			<tr>
				<td>1</td>
				<td>ABC</td>
				<td>
					<span>05/2010</span>
				</td>
				<td>Đơn vị A</td>
				<td>abcusernam</td>
				<td>0123456989</td>
				<td>
					<button>Chi tiết</button>
					<button class="button-red nhanvien__button-del">Xóa</button>
				</td>
			</tr>
		</table>
	);
};

export default TableEmployee;
