import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const SidebarUser = () => {
	return (
		<div className="sidebar-user">
			<div className="sidebar-user__container">
				<h3 className="sidebar-user__title">Tài khoản</h3>
				<ul className="sidebar-user__list">
					<li className="sidebar-user__item">
						<Link to="/account" className="sidebar-user__link">
							<div className="sidebar-user__icon">
								<ion-icon name="person-circle-outline"></ion-icon>
							</div>
							Thông tin
						</Link>
					</li>
					<li className="sidebar-user__item">
						<Link to="/booked" className="sidebar-user__link">
							<div className="sidebar-user__icon">
								<ion-icon name="list-outline"></ion-icon>
							</div>
							Các tour đã đặt
						</Link>
					</li>
					<li className="sidebar-user__item">
						<Link to="/password" className="sidebar-user__link">
							<div className="sidebar-user__icon">
								<ion-icon name="lock-closed-outline"></ion-icon>
							</div>
							Đổi mật khẩu
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SidebarUser;
