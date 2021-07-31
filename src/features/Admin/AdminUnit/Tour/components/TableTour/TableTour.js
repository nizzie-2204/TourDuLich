import React from "react";
import "./style.scss";

const TableTour = () => {
	return (
		<div class="tours-table">
			<table>
				<thead>
					<th>Tên tour</th>
					<th>Địa điểm</th>
					<th>Ngày bắt đầu tour</th>
					<th>Đơn vị mở tour</th>
					<th>Ngày mở đăng ký</th>
					<th>Ngày kết thúc đăng ký</th>
					<th>Số lượng người đăng ký</th>
				</thead>
				<tr>
					<td>Đà Lạt 3 ngày 2 đêm</td>
					<td>Thành phố Đà Lạt</td>
					<td>2/12/2021</td>
					<td class="tours__info-donvi">
						<a href="">Đơn vị A</a>
					</td>
					<td>15/7/2021</td>
					<td>1/9/2021</td>
					<td class="tours__info-more">
						<span>
							<b>10</b>/60
						</span>
						<a href="">(Thông tin chi tiết)</a>
					</td>
				</tr>
				<tr>
					<td>Đà Lạt 3 ngày 2 đêm</td>
					<td>Thành phố Đà Lạt</td>
					<td>2/12/2021</td>
					<td class="tours__info-donvi">
						<a href="">Đơn vị A</a>
					</td>
					<td>15/7/2021</td>
					<td>1/9/2021</td>
					<td class="tours__info-more">
						<span>
							<b>10</b>/60
						</span>
						<a href="">(Thông tin chi tiết)</a>
					</td>
				</tr>
				<tr>
					<td>Đà Lạt 3 ngày 2 đêm</td>
					<td>Thành phố Đà Lạt</td>
					<td>2/12/2021</td>
					<td class="tours__info-donvi">
						<a href="">Đơn vị A</a>
					</td>
					<td>15/7/2021</td>
					<td>1/9/2021</td>
					<td class="tours__info-more">
						<span>
							<b>10</b>/60
						</span>
						<a href="">(Thông tin chi tiết)</a>
					</td>
				</tr>
			</table>
		</div>
	);
};

export default TableTour;
