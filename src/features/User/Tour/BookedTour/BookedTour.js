import React from "react";
import "./style.scss";

const BookedTour = () => {
	return (
		<div className="booked-tours__item">
			<div className="booked-tours__item-image">
				<img
					src="https://1.bp.blogspot.com/-FI86ND6sFmI/YD8Sp2q9KRI/AAAAAAAACko/p5UwGwhozosUUBZC6KUgcqFCzGfgwx25ACLcBGAsYHQ/s16000/dulichdanang1.jpg"
					alt="tour"
				/>
			</div>
			<div className="booked-tours__item-desc">
				<h5 className="booked-tours__item-name">
					Du lịch Hồ Phú Ninh - Tam Thanh - Rừng Dừa Bảy Mẫu - Đà Nẵng - Hội An
					- Bà Nà - Huế
				</h5>
				<div className="booked-tours__item-time">
					<div>
						Ngày bắt đầu tour: <span>2020-03-10</span>
					</div>
					<div>
						Ngày kết thúc tour: <span>2020-03-10</span>
					</div>
				</div>
			</div>
			<div className="booked-tours__item-price">Giá: 6,000,000₫</div>
			<div className="booked-tours__cancel">Hủy tour</div>
		</div>
	);
};
export default BookedTour;
