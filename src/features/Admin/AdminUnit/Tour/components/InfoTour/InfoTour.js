import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import "./style.scss";

const InfoTour = () => {
	const user = useSelector((state) => state.auth.user);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const [mulFiles, setMulFiles] = useState([]);

	const handleOnChangePictures = (e) => {
		const files = e.target.files;

		const arrFiles = Array.from(files)?.map((file) => {
			return file.name;
		});

		setMulFiles(arrFiles);
	};

	const handleAddTour = (data, e) => {
		e.preventDefault();

		console.log(data);
		console.log(mulFiles);
	};

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
					<form class="update-imgs">
						<input type="file" name="" id="" accept=".jpg, .jpeg, .png" />
						<button type="submit">Update Selected Picture</button>
					</form>
				</div>
				<form
					class="tours-moreinfo__panel--details"
					onSubmit={handleSubmit(handleAddTour)}
				>
					<div>
						<label for="">Tên tour: </label>
						<div>
							<input
								{...register("name", { require: true })}
								type="text"
								defaultValue=""
							/>
						</div>
					</div>

					<div>
						<label for="">Số lượng: </label>
						<div>
							<input
								{...register("quantity", {
									require: true,
									valueAsNumber: true,
								})}
								type="text"
								defaultValue=""
							/>
						</div>
					</div>

					{/* <div>
						<label for="">Id tour: </label>
						<div>
							<input
								{...register("id", { require: true })}
								type="date"
								value="2021-12-01"
								disabled
							/>
						</div>
					</div> */}

					<div>
						<label for="">Ngày bắt đầu tour: </label>
						<div>
							<input
								{...register("startDate", { require: true })}
								type="date"
								defaultValue=""
							/>
						</div>
					</div>
					<div>
						<label for="">Ngày kết thúc tour: </label>
						<div>
							<input
								{...register("endDate", { require: true })}
								type="date"
								defaultValue=""
							/>
						</div>
					</div>
					<div>
						<label for="">Ngày mở đăng ký: </label>
						<div>
							<input
								{...register("startBookDate", { require: true })}
								type="date"
								defaultValue=""
							/>
						</div>
					</div>
					<div>
						<label for="">Ngày kết thúc đăng ký: </label>
						<div>
							<input
								{...register("endBookDate", { require: true })}
								type="date"
								defaultValue=""
							/>
						</div>
					</div>
					<div>
						<label for="">Đơn vị quản lý: </label>
						<div>
							<input
								{...register("unit", { require: true })}
								type="text"
								value={user.donvi.dv_ten}
							/>
						</div>
					</div>
					<div>
						<label for="">Giá tour: </label>
						<div>
							<input
								{...register("price", { require: true })}
								class="money"
								type="text"
								defaultValue=""
							/>
							<span style={{ marginLeft: "20px", fontWeight: "bold" }}>
								VNĐ
							</span>
						</div>
					</div>
					<div>
						<label for="">Mô tả: </label>
						<div>
							<textarea
								{...register("desc", { require: true })}
								cols="37"
								rows="15"
							></textarea>
						</div>
					</div>
					<div>
						<label for="">Hình tour: </label>
						<div>
							<input
								{...register("images")}
								type="file"
								id="files"
								name="files"
								multiple
								onChange={handleOnChangePictures}
								accept=".jpg, .jpeg, .png"
							/>
						</div>
					</div>
					<div>
						<label for=""></label>
						<div>
							<button type="button">Thay đổi thông tin</button>
							<button type="submit">Xác nhận</button>
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
