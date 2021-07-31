import React from "react";
import "./style.scss";

const InfoEmployee = () => {
	return (
		<div class="info-nv">
			<h3>Thông tin nhân viên</h3>
			<div class="info-nv__header">
				<div class="info__img">
					<img src="../asset/a.jpg" alt="" />
				</div>
				<form class="header__basic-info">
					<div class="info__group">
						<label for="">Họ và tên: </label>
						<input type="text" value="Nguyễn Văn A" disabled />
					</div>
					<div class="info__group">
						<label for="">Ngày sinh: </label>
						<input type="date" value="1990-01-23" disabled />
					</div>
					<div class="info__group">
						<label for="">Ngày vào làm: </label>
						<input type="month" value="2010-05" disabled />
					</div>
					<div class="info__group">
						<label for="">Địa chỉ: </label>
						<input type="text" value="10, QL1A, Thành phố Cần Thơ" disabled />
					</div>
					<div class="info__group">
						<label for="">Số điện thoại: </label>
						<input type="tel" value="01234445553" disabled />
					</div>
					<div class="info__group">
						<label for="">Giới tính: </label>
						<div>
							<input type="radio" name="gt" checked value="M" disabled />
							<span>Nam</span>
							<input type="radio" name="gt" value="F" disabled />
							<span>Nữ</span>
						</div>
					</div>
					<div class="info__group">
						<label for="">Tài khoản được cấp: </label>
						<input type="text" value="nguyenvana123" disabled />
					</div>
					<div class="info__group">
						<label for="">Cập nhật mật khẩu: </label>
						<input type="password" value="" disabled />
					</div>
					<div class="info__group--button">
						<button type="button">Cập nhật thông tin</button>
						<button type="submit" disabled>
							Xác nhận
						</button>
						<button type="button" cancel="true" disabled>
							Hủy
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default InfoEmployee;
