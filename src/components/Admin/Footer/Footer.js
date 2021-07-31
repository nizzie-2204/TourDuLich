import React from "react";
import "./style.scss";

const Footer = () => {
	return (
		<footer class="footer-admin">
			<div>&copy; Copyright 2021, Example Corporation</div>
			<div class="footer__info">
				<div class="footer__contact">
					<span>
						<b>Địa chỉ:</b> 999, QL1A, Thành phố Mỹ Tho
					</span>
					<span>
						<b>Email:</b> qldulich@gmail.com
					</span>
					<span>
						<b>Số điện thoại:</b> 0123456789
					</span>
				</div>
				<div class="footer__logo">
					<img src="../asset/a.jpg" alt="logo" width="80px" height="80px" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
