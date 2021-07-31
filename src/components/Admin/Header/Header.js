import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../../features/Auth/authSlice";
import "./style.scss";

const Header = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogout = () => {
		// const token =
		const token = localStorage.getItem("adminToken");
		const action = logout(token);
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				localStorage.removeItem("adminToken");
				history.push("/login");
			});
	};

	return (
		<header class="header-admin">
			<div class="header__left">
				<i class="fas fa-bars"></i>
			</div>
			<div class="header__right">
				<div class="header__right--info">
					<div onClick={handleLogout}>
						<div>
							<ion-icon name="log-out-outline"></ion-icon>
						</div>
						<p>Đăng xuất</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
