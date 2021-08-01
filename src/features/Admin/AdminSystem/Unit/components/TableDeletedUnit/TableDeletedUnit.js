import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeletedUnits, restoreDeletedUnit } from "../../unitSlice";
import Swal from "sweetalert2";

const TableDeletedUnit = () => {
	const dispatch = useDispatch();

	const deletedUnits = useSelector((state) => state.unit.deletedUnits);

	useEffect(() => {
		const fetchDeletedUnits = () => {
			const action = getDeletedUnits();
			dispatch(action)
				.then(unwrapResult)
				.catch((error) => console.log(error));
		};

		fetchDeletedUnits();
	}, []);

	const handleRestoreDeletedUnit = (id) => {
		const action = restoreDeletedUnit(id);
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Swal.fire({
					title: "Khôi phục đơn vị thành công",
					icon: "success",
					showConfirmButton: false,
					padding: "2rem 0 3rem 0",
					timer: 2000,
					customClass: {
						title: "alert__title",
					},
				});
				console.log("Restored");
			})
			.catch((error) => console.log(error));
	};

	return (
		<div class="donvi-table">
			<h3>Các đơn vị đã xóa</h3>
			<table>
				<thead>
					<th>Mã đơn vị</th>
					<th>Tên đơn vị</th>
					<th>Số lượng nhân viên</th>
				</thead>

				{deletedUnits &&
					deletedUnits.map((unit) => {
						return (
							<tr key={unit.id}>
								<td>{unit.id}</td>
								<td>{unit.dv_ten}</td>
								<td class="donvi__more-info">
									<button
										className="donvi_khoiphuc"
										// onClick={handleRestoreDeletedUnit(unit.id)}
										type="button"
										style={{ width: "75px" }}
									>
										Khôi phục
									</button>
								</td>
							</tr>
						);
					})}
			</table>
		</div>
	);
};

export default TableDeletedUnit;
