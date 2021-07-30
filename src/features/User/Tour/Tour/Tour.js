import React from "react";
import "./style.scss";
import { Link, useParams } from "react-router-dom";
import { formatPrice } from "../../../../utils/common";

const Tour = ({ tour }) => {
	return (
		<div className="tour">
			<Link to={`/tour/${tour?.id}`}>
				<img
					src="https://1.bp.blogspot.com/-76aAZRyIXNc/YD8SpChvElI/AAAAAAAACkY/Sq4cgQidSyY9gA9P3W3xBDIPYhEI2wTjQCLcBGAsYHQ/w480-h320-p-k-no-nu/51510475870552.jpg"
					alt=""
					className="tour__img"
				/>
			</Link>
			<div className="tour__desc">
				<Link to="/" className="tour__title">
					{tour?.t_ten}
				</Link>
				<div className="tour__transportation"></div>
				<div className="tour__schedule">
					<p>
						Lịch khởi hành:
						<span>Tất cả các ngày trong tuần</span>
					</p>
				</div>
				<div className="tour__time">
					<p>
						Thời gian:
						<span>4 ngày 3 đêm</span>
					</p>
				</div>
				<div className="tour__action">
					<div className="tour__price">{formatPrice(tour?.t_gia)}</div>
					<button type="button" className="tour__booking">
						Đặt tour
					</button>
				</div>
			</div>
		</div>
	);
};

export default Tour;
