import React from "react";
import SidebarUser from "../../../../components/SidebarUser/SidebarUser";
import "./style.scss";

const ChangePasswordForm = () => {
	return (
		<div className="change-pw">
			<div className="change-pw__container">
				<div className="change-pw__content">
					<SidebarUser />
					<form className="change-pw__form">
						<h3 className="change-pw__title">Đổi mật khẩu</h3>
						<div className="change-pw__input">
							<label htmlFor="password">Mật khẩu mới</label>
							<input type="password" id="password" />
						</div>
						<div className="change-pw__input">
							<label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
							<input type="password" id="confirmPassword" />
						</div>
						<button className="change-pw__confirm">Xác nhận</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ChangePasswordForm;
