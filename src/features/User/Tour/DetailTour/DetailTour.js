import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookTour, getTour } from "../TourSlice";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { unwrapResult } from "@reduxjs/toolkit";
import { formatPrice } from "../../../../utils/common";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

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
		.test("len", "Năm sinh có 4 số", (val) => val.toString().length === 4)
		.required("Vui lòng nhập năm sinh"),
	phone: yup
		.string()
		.matches(phoneRegExp, "Số điện thoại không hợp lệ")
		.required("Vui lòng nhập số điện thoại"),
	// sex: yup.required(),
});

const DetailTour = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const tour = useSelector((state) => state.tour.tour);
	const tourLoading = useSelector((state) => state.tour.tourLoading);
	const user = useSelector((state) => state.auth.user);

	useEffect(() => {
		const fetchTour = () => {
			const action = getTour(id);
			dispatch(action)
				.then(unwrapResult)
				.catch((error) => console.log(error));
		};

		fetchTour();
		if (tour) {
			console.log(tour);
		}
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handleBookTour = () => {
		const token = localStorage.getItem("userToken");
		const action = bookTour({ user, token });
		dispatch(action);
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
							</Carousel>
							<div className="detail-tour__info">
								<h3 className="detail-tour__name">{tour?.t_ten}</h3>
								<p className="detail-tour__price">
									Giá {formatPrice(tour?.t_gia)}
								</p>
								<p className="detail-tour__desc">{tour?.t_mota}</p>
								<div className="detail-tour__time">
									<div>
										Thời gian đăng ký tour:{" "}
										<span>
											{tour?.t_tgbatdaudk} - {tour?.t_tgketthucdk}
										</span>
									</div>
									<div style={{ marginBottom: "2rem" }}>
										Ngày bắt đầu tour: <span>{tour?.t_ngaybatdau}</span>
									</div>
									<div>
										Ngày kết thúc tour: <span>{tour?.t_ngayketthuc}</span>
									</div>
								</div>
							</div>
						</div>

						<form className="detail-tour__form">
							<h3 className="user-info__title">Thông tin đăng ký</h3>

							<div className="user-info__input">
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
								<p className="user-info__error-input">
									{errors?.name?.message}
								</p>
							)}

							<div className="user-info__input">
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
								<p className="user-info__error-input">
									{errors?.address?.message}
								</p>
							)}
							<div className="user-info__input">
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
								<p className="user-info__error-input">
									{errors?.yearOfBirth?.message}
								</p>
							)}
							<div className="user-info__input">
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
								<p className="user-info__error-input">
									{errors?.phone?.message}
								</p>
							)}
							<div className="user-info__input-sex">
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

							<button
								onClick={handleBookTour}
								type="button"
								className="detail-tour__booking"
							>
								Đăng ký tour
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default DetailTour;
