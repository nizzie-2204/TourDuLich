import React from "react";
import "./style.scss";
import { Link, useParams } from "react-router-dom";
import { formatDate, formatPrice } from "../../../../utils/common";

const Tour = ({ tour }) => {
	return (
		<Link to={`/tour/${tour?.id}`} className="tour">
			<Link to={`/tour/${tour?.id}`} className="tour__img">
				<img
					src={
						tour?.hinhtour[0]?.ht_path &&
						require(`../../../../assets/images/${tour?.hinhtour[0]?.ht_path?.slice(
							-11
						)}`).default
					}
					alt={tour?.t_ten}
				/>
			</Link>
			<div className="tour__desc">
				<h3 className="tour__title">{tour?.t_ten}</h3>
				<div className="tour__schedule">
					<p>
						Lịch khởi hành:
						<span>
							{formatDate(tour?.t_ngaybatdau)} -{" "}
							{formatDate(tour?.t_ngayketthuc)}
						</span>
					</p>
				</div>
				{/* <div className="tour__time">
					<p>
						Thời gian:
						<span>4 ngày 3 đêm</span>
					</p>
				</div> */}
				<div className="tour__action">
					<div className="tour__price">{formatPrice(tour?.t_gia)}</div>
					<button type="button" className="tour__booking">
						Đặt tour
					</button>
				</div>
			</div>
		</Link>
	);
};

export default Tour;
