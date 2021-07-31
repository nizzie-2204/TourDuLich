import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUnit, getUnits } from "../../unitSlice";
import "./style.scss";

const TableUnit = () => {
	const dispatch = useDispatch();
	const units = useSelector((state) => state.unit.units);
	const unitsLoading = useSelector((state) => state.unit.unitsLoading);

	useEffect(() => {
		const fetchUnits = () => {
			const action = getUnits();
			dispatch(action)
				.then(unwrapResult)
				.then((data) => console.log(data))
				.catch((error) => console.log(error));
		};

		fetchUnits();
	}, []);

	const handleDeleteUnit = (id) => {
		const action = deleteUnit(id);
		dispatch(action)
			.then(unwrapResult)
			.catch((error) => console.log(error));
	};

	const handleEditUnit = () => {
		// const action = deleteUnit()
		// dispatch(action).then(unwrapResult).catch(error => console.log(error))
	};

	return (
		<div class="donvi-table">
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
									<button type="button">Sửa</button>
									<button
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
