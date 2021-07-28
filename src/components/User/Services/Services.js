import React from "react";
import "./style.scss";

const Services = () => {
	return (
		<div className="services">
			<div className="services__container">
				<div className="services__content">
					<div className="services__item">
						<div className="services__image">
							<img
								src="https://1.bp.blogspot.com/-oOUtwK1vblY/YELqcwCLY4I/AAAAAAAACoE/23o0ZZQF5Mg0XaV9pvFYACSxR1_1-ZsXACLcBGAsYHQ/s0/feature_search_image_1.png"
								alt=""
							/>
						</div>
						<div className="services__desc">
							<h3 className="services__title">
								Đảm bảo giá tốt nhất Đảm bảo giá tốt nhất
							</h3>
							<p className="services__sub-title">
								Chúng tôi đảm bảo khách hàng sẽ đặt được dịch vụ với giá tốt
								nhất, những chương trình khuyến mãi hấp dẫn nhất
							</p>
						</div>
					</div>
					<div className="services__item">
						<div className="services__image">
							<img
								src="https://1.bp.blogspot.com/-rHS9t8sy170/YELqjRQ_nNI/AAAAAAAACoM/yQ2KPFWkZI0ji3Oes7POetHMxqpgkKb1wCLcBGAsYHQ/s0/feature_search_image_2.png"
								alt=""
							/>
						</div>
						<div className="services__desc">
							<h3 className="services__title">
								Dịch vụ tin cậy - Giá trị đích thực Dịch vụ tin cậy - Giá trị
								đích thực
							</h3>
							<p className="services__sub-title">
								Đặt lợi ích khách hàng lên trên hết, chúng tôi hỗ trợ khách hàng
								nhanh và chính xác nhất với dịch vụ tin cậy, giá trị đích thực.
							</p>
						</div>
					</div>
					<div className="services__item">
						<div className="services__image">
							<img
								src="https://1.bp.blogspot.com/-8uk7lpA4x6U/YELqo3AQfuI/AAAAAAAACoQ/KcYXYY090OEa3NzdhoKrrTI2FEkdIbWVACLcBGAsYHQ/s0/feature_search_image_3.png"
								alt=""
							/>
						</div>
						<div className="services__desc">
							<h3 className="services__title">
								Đảm bảo chất lượng Đảm bảo chất lượng
							</h3>
							<p className="services__sub-title">
								Chúng tôi liên kết chặt chẽ với các đối tác, khảo sát định kỳ để
								đảm bảo chất lượng tốt nhất của dịch vụ
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
