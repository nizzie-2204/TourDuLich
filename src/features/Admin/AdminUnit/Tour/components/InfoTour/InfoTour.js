import React from "react";
import "./style.scss";

const InfoTour = () => {
	return (
		<div class="tours-moreinfo">
			<h3>Thông tin chi tiết</h3>
			<div class="tours-moreinfo__panel">
				<div class="tours-moreinfo__panel--imgs">
					<div class="selected-img">
						<img src="" alt="" />
					</div>
					<div class="list-imgs">
						<img class="selected-img__active" src="../asset/1.png" alt="" />
						<img class="" src="../asset/2.png" alt="" />
						<img class="" src="../asset/3.png" alt="" />
						<img class="" src="../asset/4.png" alt="" />
					</div>
					<form class="update-imgs" method="">
						<input type="file" name="" id="" accept=".jpg, .jpeg, .png" />
						<button type="submit">Update Selected Picture</button>
					</form>
				</div>
				<form class="tours-moreinfo__panel--details">
					<div>
						<label for="">Tên tour: </label>
						<div>
							<input type="text" value="Đà Lạt 3 ngày 2 đêm" disabled />
						</div>
					</div>
					<div>
						<label for="">Địa Điểm: </label>
						<div>
							<input type="text" value="Thành phố Đà Lạt" disabled />
						</div>
					</div>
					<div>
						<label for="">Ngày bắt đầu tour: </label>
						<div>
							<input type="date" value="2021-12-01" disabled />
						</div>
					</div>
					<div>
						<label for="">Ngày mở đăng ký: </label>
						<div>
							<input type="date" value="2021-07-01" disabled />
						</div>
					</div>
					<div>
						<label for="">Ngày kết thúc đăng ký: </label>
						<div>
							<input type="date" value="2021-08-01" disabled />
						</div>
					</div>
					<div>
						<label for="">Đơn vị quản lý: </label>
						<div>
							<select name="" id="" disabled>
								<option value="1">Đơn vị A</option>
								<option value="2" selected>
									Đơn vị B
								</option>
								<option value="3">Đơn vị C</option>
							</select>
						</div>
					</div>
					<div>
						<label for="">Giá tour: </label>
						<div>
							<input class="money" type="text" value="200,000" disabled />
							<span style={{ marginLeft: "20px", fontWeight: "bold" }}>
								VNĐ
							</span>
						</div>
					</div>
					<div>
						<label for="">Mô tả: </label>
						<div>
							{/* <textarea name="" id="" cols="37" rows="15" disabled>
								Belief, Lorem Ipsum is not simply random text. It has roots in a
								piece of classical Latin literature from 45 BC, making it over
								2000 years old. Richard McClintock, a Latin professor at
								Hampden-Sydney College in Virginia, looked up one of the more
								obscure Latin words, consectetur, from a Lorem Ipsum passage,
								and going through the
							</textarea> */}
						</div>
					</div>
					<div>
						<label for=""></label>
						<div>
							<button type="button">Thay đổi thông tin</button>
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
		</div>
	);
};

export default InfoTour;
