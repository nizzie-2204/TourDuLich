import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__left">
					<Link to="/" className="footer__logo">
						<img
							src="https://2.bp.blogspot.com/--gy8wAHc2v8/YEMvx9o5M4I/AAAAAAAACr4/6be2_QTuimAvVqXdBOIwPwxKu7BltdCdQCK4BGAYYCw/s1600/fot_logo.png"
							alt=""
						/>
					</Link>
					<div className="footer__contact">
						<p>
							Địa chỉ:
							<span>
								30 Đường 2/9, Phường Bình Hiên, Quận Hải Châu, Đà Nẵng
							</span>
						</p>
						<p>
							Email:
							<span>evoteamthemes@gmail.com</span>
						</p>
						<p>
							Điện thoại:
							<span>0123123123</span>
						</p>
					</div>
				</div>
				<div className="footer__right">
					<div className="footer__tour">
						<h5 className="footer__tour-title">Evo Tour</h5>
						<ul className="footer__tour-list">
							<li>
								<Link to="/">Trang chủ</Link>
							</li>
							<li>
								<Link to="/">Giới thiệu</Link>
							</li>
							<li>
								<Link to="/">Tour du lịch</Link>
							</li>
							<li>
								<Link to="/">Tour khuyến mãi</Link>
							</li>
							<li>
								<Link to="/">Tin tức</Link>
							</li>
							<li>
								<Link to="/">Kinh nghiệm du lịch</Link>
							</li>
							<li>
								<Link to="/">FAQ</Link>
							</li>
							<li>
								<Link to="/">Liên hệ</Link>
							</li>
						</ul>
					</div>
					<div className="footer__tour">
						<h5 className="footer__tour-title">Evo Tour</h5>
						<ul className="footer__tour-list">
							<li>
								<Link to="/">Trang chủ</Link>
							</li>
							<li>
								<Link to="/">Giới thiệu</Link>
							</li>
							<li>
								<Link to="/">Tour du lịch</Link>
							</li>
							<li>
								<Link to="/">Tour khuyến mãi</Link>
							</li>
							<li>
								<Link to="/">Tin tức</Link>
							</li>
							<li>
								<Link to="/">Kinh nghiệm du lịch</Link>
							</li>
							<li>
								<Link to="/">FAQ</Link>
							</li>
							<li>
								<Link to="/">Liên hệ</Link>
							</li>
						</ul>
					</div>
					<div className="footer__tour">
						<h5 className="footer__tour-title">Evo Tour</h5>
						<ul className="footer__tour-list">
							<li>
								<Link to="/">Trang chủ</Link>
							</li>
							<li>
								<Link to="/">Giới thiệu</Link>
							</li>
							<li>
								<Link to="/">Tour du lịch</Link>
							</li>
							<li>
								<Link to="/">Tour khuyến mãi</Link>
							</li>
							<li>
								<Link to="/">Tin tức</Link>
							</li>
							<li>
								<Link to="/">Kinh nghiệm du lịch</Link>
							</li>
							<li>
								<Link to="/">FAQ</Link>
							</li>
							<li>
								<Link to="/">Liên hệ</Link>
							</li>
						</ul>
					</div>
					<div className="footer__tour">
						<h5 className="footer__tour-title">Evo Tour</h5>
						<ul className="footer__tour-list">
							<li>
								<Link to="/">Trang chủ</Link>
							</li>
							<li>
								<Link to="/">Giới thiệu</Link>
							</li>
							<li>
								<Link to="/">Tour du lịch</Link>
							</li>
							<li>
								<Link to="/">Tour khuyến mãi</Link>
							</li>
							<li>
								<Link to="/">Tin tức</Link>
							</li>
							<li>
								<Link to="/">Kinh nghiệm du lịch</Link>
							</li>
							<li>
								<Link to="/">FAQ</Link>
							</li>
							<li>
								<Link to="/">Liên hệ</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
