import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Tour = () => {
	return (
		<div className="tour">
			<Link to="/tour/1">
				<img
					src="https://1.bp.blogspot.com/-76aAZRyIXNc/YD8SpChvElI/AAAAAAAACkY/Sq4cgQidSyY9gA9P3W3xBDIPYhEI2wTjQCLcBGAsYHQ/w480-h320-p-k-no-nu/51510475870552.jpg"
					alt=""
					className="tour__img"
				/>
			</Link>
			<div className="tour__desc">
				<Link to="/" className="tour__title">
					Du lịch Hồ Phú Ninh - Tam Thanh - Rừng Dừa Bảy Mẫu - Đà Nẵng - Hội An
					- Bà Nà - Huế
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
					<div className="tour__price">6,000,000</div>
					<button type="button" className="tour__booking">
						Đặt tour
					</button>
				</div>
			</div>
		</div>
	);
};

export default Tour;
