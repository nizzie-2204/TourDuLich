import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
	addNewPicture,
	addTour,
	cancelGetTour,
	editTour,
	getTour,
} from "../../tourSlice";
import "./style.scss";
import Swal from "sweetalert2";
import { unwrapResult } from "@reduxjs/toolkit";
import { Carousel } from "react-responsive-carousel";

const InfoTour = () => {
	const user = useSelector((state) => state.auth.user);
	const tour = useSelector((state) => state.adminTour.tour);
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	useEffect(() => {
		if (tour) {
			const fetchTours = () => {
				const action = getTour(tour.id);
				dispatch(action);
			};

			fetchTours();
			reset();
		}
	}, [tour?.id]);

	// Handle select multiple images
	const [mulFiles, setMulFiles] = useState([]);

	const handleOnChangePictures = (e) => {
		const files = e.target.files;

		const arrFiles = Array.from(files)?.map((file) => {
			return file;
		});

		setMulFiles(arrFiles);
	};

	// End handle select multiple images

	const handleAddTour = (data, e) => {
		e.preventDefault();

		const dataForm = {
			...data,
			images: [...mulFiles],
		};

		const action = addTour(dataForm);
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				Swal.fire({
					title: "Thêm tour thành công",
					icon: "success",
					showConfirmButton: false,
					padding: "2rem 0 3rem 0",
					timer: 2000,
					customClass: {
						title: "alert__title",
					},
				});

				setMulFiles([]);

				reset();
			});
	};

	const handleEditTour = (data, e) => {
		e.preventDefault();
		const id = tour.id;

		console.log(mulFiles);

		const action = addNewPicture({ id, mulFiles });
		dispatch(action);

		// const action2 = editTour({ data, id });
		// dispatch(action2)
		// 	.then(unwrapResult)
		// 	.then(() => {
		// 		Swal.fire({
		// 			title: "Sửa tour thành công",
		// 			icon: "success",
		// 			showConfirmButton: false,
		// 			padding: "2rem 0 3rem 0",
		// 			timer: 2000,
		// 			customClass: {
		// 				title: "alert__title",
		// 			},
		// 		});

		// 		const action = cancelGetTour();
		// 		dispatch(action);

		// 		setMulFiles([]);

		// 		reset();
		// 	});
	};

	const handleCancelGetTour = () => {
		const action = cancelGetTour();
		dispatch(action);
		setMulFiles([]);
	};

	return (
		<div class="tours-moreinfo">
			<h3>{tour ? "Sửa thông tin tour" : "Thêm tour"}</h3>
			{!tour ? (
				<div class="tours-moreinfo__panel">
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
						<input type="hidden" {...register("dv_id")} value={user.donvi.id} />
						{/* <div>
							<label for="">Đơn vị quản lý: </label>
							<div>
								<input
									{...register("unit", { require: true })}
									type="text"
									value={user.donvi.dv_ten}
								/>
							</div>
						</div> */}
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
									defaultValue=""
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
								{/* <button type="button">Thay đổi thông tin</button> */}
								<button type="submit">Xác nhận</button>
							</div>
						</div>
					</form>
					<Carousel className="carousel-tour-imgs">
						{mulFiles &&
							mulFiles?.map((image) => {
								return (
									<div>
										<img
											src={
												image.name
													? `http://localhost:8000/storage/images/${image.name}`
													: ""
											}
											alt="tour"
										/>
									</div>
								);
							})}
					</Carousel>
				</div>
			) : (
				<div class="tours-moreinfo__panel">
					<form
						class="tours-moreinfo__panel--details"
						onSubmit={handleSubmit(handleEditTour)}
					>
						<div>
							<label for="">Tên tour: </label>
							<div>
								<input
									{...register("name", { require: true })}
									type="text"
									defaultValue={tour.t_ten}
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
									defaultValue={tour.t_soluong}
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
									defaultValue={tour.t_ngaybatdau}
								/>
							</div>
						</div>
						<div>
							<label for="">Ngày kết thúc tour: </label>
							<div>
								<input
									{...register("endDate", { require: true })}
									type="date"
									defaultValue={tour.t_ngayketthuc}
								/>
							</div>
						</div>
						<div>
							<label for="">Ngày mở đăng ký: </label>
							<div>
								<input
									{...register("startBookDate", { require: true })}
									type="date"
									defaultValue={tour.t_tgbatdaudk}
								/>
							</div>
						</div>
						<div>
							<label for="">Ngày kết thúc đăng ký: </label>
							<div>
								<input
									{...register("endBookDate", { require: true })}
									type="date"
									defaultValue={tour.t_tgketthucdk}
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
									defaultValue={tour.t_gia}
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
									defaultValue={tour.t_mota}
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
								{/* <button type="button">Thay đổi thông tin</button> */}
								<button type="submit">Xác nhận</button>
								<button
									type="button"
									onClick={() => {
										handleCancelGetTour();
										setMulFiles([]);
									}}
								>
									Hủy
								</button>
							</div>
						</div>
					</form>

					<Carousel className="carousel-tour-imgs">
						{/* {mulFiles &&
							mulFiles?.map((image) => {
								return (
									<div>
										<img
											src={
												image.name
													? `http://localhost:8000/storage/images/${image}`
													: ""
											}
											alt="tour"
										/>
									</div>
								);
							})} */}
						{tour &&
							tour?.hinhtour?.map((image) => {
								return (
									<div>
										<img
											src={`http://localhost:8000/storage/images/${image.ht_path.substr(
												86
											)}`}
											alt="tour"
										/>
									</div>
								);
							})}
					</Carousel>
				</div>
			)}
		</div>
	);
};

export default InfoTour;
