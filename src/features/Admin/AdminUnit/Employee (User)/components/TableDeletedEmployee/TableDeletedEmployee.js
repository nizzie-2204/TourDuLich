import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getDeletedEmployees,
	restoreDeletedEmployee,
} from "../../employeeSlice";
import "./style.scss";
import Swal from "sweetalert2";

const TableEmployee = () => {
	useEffect(() => {
		const fetchDeletedEmployees = () => {
			const action = getDeletedEmployees();
			dispatch(action);
		};

		fetchDeletedEmployees();
	}, []);

	const deletedEmployees = useSelector(
		(state) => state.employee.deletedEmployees
	);
	const dispatch = useDispatch();

	const filteredEmployees = deletedEmployees?.filter((employee) => {
		return employee.ltk_id === 3;
	});

	const handleRestoreDeleteEmployee = (id) => {
		const action = restoreDeletedEmployee(id);
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Swal.fire({
					title: "Khôi phục nhân viên thành công",
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
		<>
			<h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
				Nhân viên đã xóa trong đơn vị
			</h3>
			<table className="table-employee">
				<thead>
					<th>Mã nhân viên</th>
					<th>Tên nhân viên</th>
					<th>Ngày vào làm</th>
					<th>Thông tin tài khoản</th>
					<th>Thông tin liên lạc</th>
					<th>Chỉnh sửa thông tin</th>
				</thead>

				{filteredEmployees &&
					filteredEmployees?.map((employee) => {
						return (
							<tr key={employee.id}>
								<td>{employee.id}</td>
								<td>{employee.nv_ten}</td>
								<td>
									<span>{employee.nv_thoigianvaolam}</span>
								</td>
								{/* <td>{employee.donvi.dv_ten}</td> */}
								<td>{employee.username}</td>
								<td>{employee.nv_sdt}</td>
								<td>
									<button
										type="button"
										onClick={() => {
											handleRestoreDeleteEmployee(employee.id);
										}}
									>
										Khôi phục
									</button>
								</td>
							</tr>
						);
					})}
			</table>
		</>
	);
};

export default TableEmployee;
