import React from "react";
import "./style.scss";

const DetailUnit = () => {
	return (
		<div class="donvi-chitiet">
			<h3>
				Thông tin kinh phí hỗ trợ của đơn vị <i>ABC</i>
			</h3>
			<form action="" class="donvi-search__kinhphi">
				<div class="donvi-form__group">
					<label for="">Từ năm</label>
					<input type="number" value="2020" min="1970" max="3000" />
				</div>
				<div class="donvi-form__group">
					<label for="">Đến năm</label>
					<input type="number" value="2021" min="1970" max="3000" />
				</div>
				<div class="donvi-form__group">
					<button type="submit">
						<i class="fas fa-search"></i>
					</button>
				</div>
			</form>
			<form class="donvi-show__kinhphi">
				<div class="donvi-form__group">
					<label for="">
						Thâm niên từ <b>2</b> năm đến <b>3</b> năm
					</label>
					<input type="text" value="200,000" disabled /> <span>VNĐ</span>
					<div>
						<button type="button">Thay đổi</button>
						<button type="submit" disabled>
							Xác nhận
						</button>
						<button type="button" cancel="true" disabled>
							Hủy
						</button>
					</div>
				</div>
				<div class="donvi-form__group">
					<label for="">
						Thâm niên từ <b>2</b> năm đến <b>3</b> năm
					</label>
					<input type="text" value="200,000" disabled /> <span>VNĐ</span>
					<div>
						<button type="button">Thay đổi</button>
						<button type="submit" disabled>
							Xác nhận
						</button>
						<button type="button" cancel="true" disabled>
							Hủy
						</button>
					</div>
				</div>
				<div class="donvi-form__group">
					<label for="">
						Thâm niên từ <b>2</b> năm đến <b>3</b> năm
					</label>
					<input type="text" value="200,000" disabled /> <span>VNĐ</span>
					<div>
						<button type="button">Thay đổi</button>
						<button type="submit" disabled>
							Xác nhận
						</button>
						<button type="button" cancel="true" disabled>
							Hủy
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default DetailUnit;
