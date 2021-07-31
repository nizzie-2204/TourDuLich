import { css } from "@emotion/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useHistory, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";
import * as yup from "yup";
import {
	checkValidDateTour,
	formatDate,
	formatPrice,
	totalPrice,
} from "../../../../utils/common";
import { bookTour, getSupportExpense, getTour } from "../TourSlice";
import "./style.scss";

const override = css`
	display: block;
	margin: 0 auto;
`;

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
	name: yup.string().required("Vui lòng nhập tên tài khoản"),
	address: yup.string().required("Vui lòng nhập địa chỉ"),
	yearOfBirth: yup
		.number("Năm sinh phải là số")
		.required("Vui lòng nhập năm sinh")
		.test("len", "Năm sinh có 4 số", (val) => val.toString().length === 4),
	phone: yup
		.string()
		.required("Vui lòng nhập số điện thoại")
		.matches(phoneRegExp, "Số điện thoại không hợp lệ"),
	// sex: yup.required(),
});

const DetailTour = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const tour = useSelector((state) => state.tour.tour);
	const tourLoading = useSelector((state) => state.tour.tourLoading);
	const user = useSelector((state) => state.auth.user);
	const [supportExpense, setSupportExpense] = useState(null);

	useEffect(() => {
		const fetchTour = () => {
			const action = getTour(id);
			dispatch(action)
				.then(unwrapResult)
				.catch((error) => console.log(error));
		};

		const fetchSupportExpense = () => {
			const token = localStorage.getItem("userToken");
			const action = getSupportExpense(token);

			dispatch(action)
				.then(unwrapResult)
				.then((result) => {
					setSupportExpense(result?.sotienhotro);
				})
				.catch((error) => console.log(error));
		};

		fetchTour();
		fetchSupportExpense();
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handleBookTour = (data, e) => {
		e.preventDefault();

		if (
			// Registration time has not arrived or registration time has passed
			!checkValidDateTour(new Date(), tour?.t_tgbatdaudk, tour?.t_tgketthucdk)
		) {
			return;
		} else {
			const idTour = parseInt(id);
			const dataForm = { ...data, idTour };

			const token = localStorage.getItem("userToken");
			const action = bookTour({ dataForm, token });
			dispatch(action)
				.then(unwrapResult)
				.then((message) => {
					Swal.fire({
						title: "Đăng ký tour thành công",
						icon: "success",
						showConfirmButton: false,
						padding: "2rem 0 3rem 0",
						timer: 2000,
						customClass: {
							title: "alert__title",
						},
					});

					history.push("/booked");
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<>
			{tourLoading ? (
				<ClipLoader size="35" css={override} />
			) : (
				<div className="detail-tour">
					<div className="detail-tour__container">
						<div className="detail-tour__content">
							<Carousel className="detail-tour__carousel">
								{tour?.hinhtour ? (
									tour?.hinhtour.map((image) => {
										console.log(image);
										return (
											<div>
												<img
													alt="tour"
													src={
														require(`../../../../assets/images/${image.ht_path.substr(
															78
														)}`).default
													}
												/>
											</div>
										);
									})
								) : (
									<>
										<div>
											<img
												alt="tour"
												src="https://1.bp.blogspot.com/-FJM6v6J1S00/YD8Spo-MaUI/AAAAAAAACkk/JtLVsWrETDIMWVAGlj7LuOO36YmKBlF_ACLcBGAsYHQ/s16000/chua-cau-hoi-an-1.jpg"
											/>
										</div>
										<div>
											<img
												alt="tour"
												src="https://1.bp.blogspot.com/-76aAZRyIXNc/YD8SpChvElI/AAAAAAAACkY/Sq4cgQidSyY9gA9P3W3xBDIPYhEI2wTjQCLcBGAsYHQ/s16000/51510475870552.jpg"
											/>
										</div>
										<div>
											<img
												alt="tour"
												src="https://1.bp.blogspot.com/-FJM6v6J1S00/YD8Spo-MaUI/AAAAAAAACkk/JtLVsWrETDIMWVAGlj7LuOO36YmKBlF_ACLcBGAsYHQ/s16000/chua-cau-hoi-an-1.jpg"
											/>
										</div>
									</>
								)}
							</Carousel>
							<div className="detail-tour__info">
								<h3 className="detail-tour__name">{tour?.t_ten}</h3>
								<p className="detail-tour__price">
									Giá: {formatPrice(tour?.t_gia)}
								</p>
								<p className="detail-tour__desc">{tour?.t_mota}</p>
								<div className="detail-tour__time">
									<div>
										Thời gian đăng ký tour:{" "}
										<span>
											{formatDate(tour?.t_tgbatdaudk)} -{" "}
											{formatDate(tour?.t_tgketthucdk)}
										</span>
									</div>
									<div style={{ marginBottom: "2rem" }}>
										Ngày bắt đầu tour:{" "}
										<span>{formatDate(tour?.t_ngaybatdau)}</span>
									</div>
									<div>
										Ngày kết thúc tour:{" "}
										<span>{formatDate(tour?.t_ngayketthuc)}</span>
									</div>
								</div>
							</div>
						</div>

						{!checkValidDateTour(
							new Date(),
							tour?.t_tgbatdaudk,
							tour?.t_tgketthucdk
						) ? (
							<div className="detail-tour__invalid-time">
								Chưa đến ngày hoặc hết ngày đăng ký tour
							</div>
						) : (
							<form
								className="detail-tour__form"
								onSubmit={handleSubmit(handleBookTour)}
							>
								<h3 className="detail-tour__title">Thông tin đăng ký</h3>

								<div className="detail-tour__input">
									<label htmlFor="name">Họ tên</label>
									<input
										type="text"
										id="name"
										{...register("name")}
										defaultValue={user?.nv_ten}
									/>
								</div>
								{/* Error when submitting */}
								{errors && (
									<p className="detail-tour__error-input">
										{errors?.name?.message}
									</p>
								)}

								<div className="detail-tour__input">
									<label htmlFor="address">Địa chỉ</label>
									<input
										type="text"
										id="address"
										defaultValue={user?.nv_diachi}
										{...register("address")}
									/>
								</div>

								{/* Error when submitting */}
								{errors && (
									<p className="detail-tour__error-input">
										{errors?.address?.message}
									</p>
								)}
								<div className="detail-tour__input">
									<label htmlFor="yearOfBirth">Năm sinh</label>
									<input
										type="text"
										id="yearOfBirth"
										defaultValue={user?.nv_namsinh}
										{...register("yearOfBirth")}
									/>
								</div>

								{/* Error when submitting */}
								{errors && (
									<p className="detail-tour__error-input">
										{errors?.yearOfBirth?.message}
									</p>
								)}
								<div className="detail-tour__input">
									<label htmlFor="phone">Số điện thoại</label>
									<input
										type="text"
										id="phone"
										defaultValue={user?.nv_sdt}
										{...register("phone")}
									/>
								</div>

								{/* Error when submitting */}
								{errors && (
									<p className="detail-tour__error-input">
										{errors?.phone?.message}
									</p>
								)}
								<div className="detail-tour__input-sex">
									<span>Giới tính</span>

									<div>
										<label htmlFor="man">Nam</label>
										<input
											{...register("sex")}
											type="radio"
											id="man"
											checked={user?.nv_gioitinh === "F"}
											value="M"
										/>
									</div>
									<div>
										<label htmlFor="woman">Nữ</label>
										<input
											{...register("sex")}
											type="radio"
											id="woman"
											checked={user?.nv_gioitinh === "F"}
											value="F"
										/>
									</div>
								</div>

								<div className="detail-tour__expense">
									<div className="detail-tour__expense-price">
										Giá: {formatPrice(tour?.t_gia)}
									</div>
									<div className="detail-tour__expense-sp">
										Phí hỗ trợ: {formatPrice(supportExpense)}
									</div>
									<div className="detail-tour__expense-total">
										Tổng tiền:{" "}
										{formatPrice(totalPrice(tour?.t_gia, supportExpense))}
									</div>
								</div>

								<button
									type="submit"
									disabled={
										!checkValidDateTour(
											new Date(),
											tour?.t_tgbatdaudk,
											tour?.t_tgketthucdk
										)
									}
									className={
										!checkValidDateTour(
											new Date(),
											tour?.t_tgbatdaudk,
											tour?.t_tgketthucdk
										)
											? "detail-tour__not-allow detail-tour__booking"
											: "detail-tour__booking"
									}
								>
									Đăng ký tour
								</button>
							</form>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default DetailTour;
