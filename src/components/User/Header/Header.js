import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../../features/Auth/authSlice";
import "./style.scss";

const Header = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const user = useSelector((state) => state.auth.user);

	const handleLogout = () => {
		const token = localStorage.getItem("userToken");

		const action = logout(token);
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				localStorage.removeItem("userToken");
				history.push("/login");
			});
	};

	return (
		<header className="header">
			<div className="header__container">
				<div className="header__content">
					{/* HEADER TOP */}
					<div className="header__top">
						<Link to="/" className="header__logo">
							<img
								src="https://3.bp.blogspot.com/-_nBTNtRwbUY/YD80f_vON8I/AAAAAAAACk8/wLHlt1zFqeAepMA6FBbTwvsHI9RY45VsQCK4BGAYYCw/s1600/logo.png"
								alt="logo"
							/>
						</Link>
						<div className="header__search">
							<input type="text" name="" id="" className="header__input" />
							<div className="header__search-icon">
								<ion-icon name="search-outline"></ion-icon>
							</div>
						</div>

						{user ? (
							<div className="header__user" onClick={handleLogout}>
								<div className="header__user-icon">
									<ion-icon name="log-out-outline"></ion-icon>
								</div>
								<p className="header__user-text">Đăng xuất</p>
							</div>
						) : (
							<Link to="/login" className="header__user">
								<div className="header__user-icon">
									<ion-icon name="person-circle-outline"></ion-icon>
								</div>
								<p className="header__user-text">Đăng nhập</p>
							</Link>
						)}
					</div>
				</div>
			</div>
			{/* HEADER NAV */}
			<div className="header__nav">
				<div className="header__container">
					<div className="header__list">
						<li className="header__link">
							<Link to="/">TRANG CHỦ</Link>
						</li>
						<li className="header__link">
							<Link to="/">GIỚI THIỆU</Link>
						</li>
						<li className="header__link">
							<Link to="/tours">TOUR DU LỊCH</Link>
						</li>
						<li className="header__link">
							<Link to="/account">TÀI KHOẢN</Link>
						</li>
						<li className="header__link">
							<Link to="/">TIN TỨC</Link>
						</li>
						<li className="header__link">
							<Link to="/">KINH NGHIỆM DU LỊCH</Link>
						</li>
						<li className="header__link">
							<Link to="/">FAQ</Link>
						</li>
						<li className="header__link">
							<Link to="/">LIÊN HỆ</Link>
						</li>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
