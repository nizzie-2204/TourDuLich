import React from "react";
import "./style.scss";
import SidebarUser from "../SidebarUser/SidebarUser";

const UserInfo = () => {
	return (
		<div className="user-info">
			<div className="user-info__container">
				<div className="user-info__content">
					<SidebarUser />

					<form className="user-info__form">
						<h3 className="user-info__title">Thông tin tài khoản</h3>
						<div className="user-info__input">
							<label htmlFor="name">Tên</label>
							<input type="text" id="name" />
						</div>
						<div className="user-info__input">
							<label htmlFor="username">Tên tài khoản</label>
							<input type="text" id="username" disabled />
						</div>
						<div className="user-info__input">
							<label htmlFor="address">Địa chỉ</label>
							<input type="text" id="address" />
						</div>
						<div className="user-info__input">
							<label htmlFor="yearOfBirth">Năm sinh</label>
							<input type="text" id="yearOfBirth" />
						</div>
						<div className="user-info__input">
							<label htmlFor="phone">Số điện thoại</label>
							<input type="text" id="phone" />
						</div>
						<div className="user-info__input-sex">
							<span>Giới tính</span>

							<div>
								<label htmlFor="man">Nam</label>
								<input type="radio" id="man" name="sex" />
							</div>
							<div>
								<label htmlFor="woman">Nữ</label>
								<input type="radio" id="woman" name="sex" />
							</div>
						</div>
						<div className="user-info__input">
							<label htmlFor="timeStartWork">Thời gian vào làm</label>
							<input type="text" id="timeStartWork" />
						</div>
						<div className="user-info__input">
							<label htmlFor="unit">Đơn vị</label>
							<input type="text" id="unit" disabled />
						</div>
						<button className="user-info__save">Lưu</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
