import React from "react";
import "./style.scss";

const BannerHome = () => {
	return (
		<div className="banner">
			<div className="banner__container">
				<div className="banner__content">
					<h2 className="banner__title">Đặt Tour du lịch!</h2>
					<p className="banner__sub-title">
						Hơn 300 tours du lịch ở Việt Nam và Quốc tế
					</p>
					<form className="banner__search">
						<div className="banner__input">
							<div className="banner__input-icon">
								<ion-icon name="location-outline"></ion-icon>
							</div>
							<input
								type="text"
								name=""
								id=""
								placeholder="Bạn  muốn đi đâu?"
							/>
						</div>
						<button type="submit" className="banner__submit">
							Tìm
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BannerHome;
