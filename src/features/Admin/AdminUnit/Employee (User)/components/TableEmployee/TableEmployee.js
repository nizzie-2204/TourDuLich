import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, getEmployee, getEmployees } from "../../employeeSlice";
import "./style.scss";
import Swal from "sweetalert2";
import { unwrapResult } from "@reduxjs/toolkit";

const TableEmployee = () => {
	const user = useSelector((state) => state.auth.user);

	useEffect(() => {
		const fetchEmployees = () => {
			const action = getEmployees();
			dispatch(action);
		};

		fetchEmployees();
	}, []);

	const employees = useSelector((state) => state.employee.employees);
	const dispatch = useDispatch();

	const filteredEmployees = employees?.filter((employee) => {
		return employee.ltk_id === 3;
	});

	const handleDeleteEmployee = (id) => {
		const action = deleteEmployee(id);
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Swal.fire({
					title: "Xóa nhân viên thành công",
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

	const handleGetEmployee = (id) => {
		const action = getEmployee(id);
		dispatch(action);
	};

	return (
		<>
			<h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
				Nhân viên hiện tại trong đơn vị
			</h3>
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

				{/* Admin system */}
				{user.ltk_id === 1 &&
					employees?.map((employee) => {
						return (
							<tr key={employee.id}>
								<td>{employee.id}</td>
								<td>{employee.nv_ten}</td>
								<td>
									<span>{employee.nv_thoigianvaolam}</span>
								</td>
								<td>{employee?.donvi?.dv_ten}</td>
								<td>{employee.username}</td>
								<td>{employee.nv_sdt}</td>
								<td className="employee__more-info">
									<button
										type="button"
										onClick={() => {
											handleGetEmployee(employee.id);
										}}
										style={{ width: "70px !important" }}
									>
										Sửa
									</button>
									<button
										style={{ width: "70px !important" }}
										type="button"
										class="button-red nhanvien__button-del"
										onClick={() => {
											handleDeleteEmployee(employee.id);
										}}
									>
										Xóa
									</button>
								</td>
							</tr>
						);
					})}

				{/* Admin unit */}
				{user.ltk_id === 2 &&
					filteredEmployees?.map((employee) => {
						return (
							<tr key={employee.id}>
								<td>{employee.id}</td>
								<td>{employee.nv_ten}</td>
								<td>
									<span>{employee.nv_thoigianvaolam}</span>
								</td>
								<td>{employee?.donvi?.dv_ten}</td>
								<td>{employee.username}</td>
								<td>{employee.nv_sdt}</td>
								<td className="employee__more-info">
									<button
										style={{ width: "70px !important" }}
										type="button"
										onClick={() => {
											handleGetEmployee(employee.id);
										}}
									>
										Sửa
									</button>
									<button
										style={{ width: "70px !important" }}
										type="button"
										class="button-red nhanvien__button-del"
										onClick={() => {
											handleDeleteEmployee(employee.id);
										}}
									>
										Xóa
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
