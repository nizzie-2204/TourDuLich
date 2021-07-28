import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.scss";
import { useParams } from "react-router-dom";

const DetailTour = () => {
	const { id } = useParams();
	console.log(id);

	return (
		<div className="detail-tour">
			<div className="detail-tour__container">
				<div className="detail-tour__content">
					<Carousel className="detail-tour__carousel">
						<div>
							<img
								alt="tour"
								src="https://1.bp.blogspot.com/-FJM6v6J1S00/YD8Spo-MaUI/AAAAAAAACkk/JtLVsWrETDIMWVAGlj7LuOO36YmKBlF_ACLcBGAsYHQ/s16000/chua-cau-hoi-an-1.jpg"
							/>
						</div>
						<div>
							<img
								alt="tour"
								src="https://1.bp.blogspot.com/-76aAZRyIXNc/YD8SpChvElI/AAAAAAAACkY/Sq4cgQidSyY9gA9P3W3xBDIPYhEI2wTjQCLcBGAsYHQ/s16000/51510475870552.jpg"
							/>
						</div>
						<div>
							<img
								alt="tour"
								src="https://1.bp.blogspot.com/-FJM6v6J1S00/YD8Spo-MaUI/AAAAAAAACkk/JtLVsWrETDIMWVAGlj7LuOO36YmKBlF_ACLcBGAsYHQ/s16000/chua-cau-hoi-an-1.jpg"
							/>
						</div>
					</Carousel>
					<div className="detail-tour__info">
						<h3 className="detail-tour__name">
							Du lịch Hồ Phú Ninh - Tam Thanh - Rừng Dừa Bảy Mẫu - Đà Nẵng - Hội
							An - Bà Nà - Huế
						</h3>
						<p className="detail-tour__price">Giá: 6,000,000₫</p>
						<p className="detail-tour__desc">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
							vel veniam odio tenetur accusamus at minus aliquid. Quo sit
							reiciendis dolore eligendi dolor, ipsa minus laboriosam ratione
							accusantium deleniti repellendus?
						</p>
						<div className="detail-tour__time">
							<div>
								Thời gian đăng ký tour: <span>2020-03-10 - 2020-03-10</span>
							</div>
							<div style={{ marginBottom: "2rem" }}>
								Ngày bắt đầu tour: <span>2020-03-10</span>
							</div>
							<div>
								Ngày kết thúc tour: <span>2020-03-10</span>
							</div>
						</div>
						<button type="button" className="detail-tour__booking">
							Đăng ký tour
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailTour;
