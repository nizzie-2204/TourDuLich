import React from "react";
import "./style.scss";

const BannerHome = () => {
	return (
		<div class="banner">
			<div class="banner__container">
				<div class="banner__content">
					<h2 class="banner__title">Đặt Tour du lịch!</h2>
					<p class="banner__sub-title">
						Hơn 300 tours du lịch ở Việt Nam và Quốc tế
					</p>
					<form class="banner__search">
						<div class="banner__input">
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
						<button type="submit" class="banner__submit">
							Tìm
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BannerHome;
