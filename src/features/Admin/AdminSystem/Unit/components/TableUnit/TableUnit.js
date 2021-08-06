import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteUnit,
	getUnit,
	getUnits,
	setSelectedUnit,
} from "../../unitSlice";
import "./style.scss";
import Swal from "sweetalert2";

const TableUnit = () => {
	const dispatch = useDispatch();
	const units = useSelector((state) => state.unit.units);
	const unitsLoading = useSelector((state) => state.unit.unitsLoading);

	useEffect(() => {
		const fetchUnits = () => {
			const action = getUnits();
			dispatch(action)
				.then(unwrapResult)
				.catch((error) => console.log(error));
		};

		fetchUnits();
	}, []);

	const handleDeleteUnit = (id) => {
		const action = deleteUnit(id);
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Swal.fire({
					title: "Xóa đơn vị thành công",
					icon: "success",
					showConfirmButton: false,
					padding: "2rem 0 3rem 0",
					timer: 2000,
					customClass: {
						title: "alert__title",
					},
				});
			})
			.catch((error) => console.log(error));
	};

	const handleSelectUnit = (unit) => {
		const action = getUnit(unit.id);
		dispatch(action);
	};

	return (
		<div class="donvi-table">
			<h3>Các đơn vị hiện tại</h3>
			<table>
				<thead>
					<th>Mã đơn vị</th>
					<th>Tên đơn vị</th>
					<th>Số lượng nhân viên</th>
				</thead>

				{units &&
					units.map((unit) => {
						return (
							<tr key={unit.id}>
								<td>{unit.id}</td>
								<td>{unit.dv_ten}</td>

								<td class="donvi__more-info">
									<button
										type="button"
										onClick={() => {
											handleSelectUnit(unit);
										}}
									>
										Sửa
									</button>
									<button
										className="donvi_xoa"
										type="button"
										onClick={() => {
											handleDeleteUnit(unit.id);
										}}
									>
										Xóa
									</button>
								</td>
							</tr>
						);
					})}
			</table>
		</div>
	);
};

export default TableUnit;
