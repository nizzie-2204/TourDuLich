import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SidebarUser from "../../../../../../components/User/SidebarUser/SidebarUser";
import "./style.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUserInfo, getUserInfo } from "../../../../../Auth/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";

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

const UserInfo = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);

	useEffect(() => {}, [user]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handleEditInfo = async (data, e) => {
		e.preventDefault();

		const token = localStorage.getItem("userToken");
		const dataInfo = {
			nv_ten: data.name,
			nv_namsinh: data.yearOfBirth,
			nv_diachi: data.address,
			nv_sdt: data.phone,
			nv_gioitinh: data.sex,
			password: "",
		};

		const action = editUserInfo({ data, token });
		dispatch(action)
			.then(unwrapResult)
			.then((data) => console.log(data))
			.catch((error) => console.log(error));

		// await fetch("http://127.0.0.1:8000/api/nhanvien", {
		// 	method: "PUT",
		// 	headers: {
		// 		Accept: "application/json",
		// 		"Content-Type": "application/json",
		// 		Authorization: `Bearer ${token}`,
		// 	},
		// 	body: JSON.stringify(dataInfo),
		// })
		// 	.then((data) => console.log(data))
		// 	.catch((err) => console.log(err));
	};

	return (
		<div className="user-info">
			<div className="user-info__container">
				<div className="user-info__content">
					<SidebarUser />

					<form
						className="user-info__form"
						onSubmit={handleSubmit(handleEditInfo)}
					>
						<h3 className="user-info__title">Thông tin tài khoản</h3>
						<div className="user-info__input">
							<label htmlFor="name">Tên</label>
							<input
								type="text"
								id="name"
								{...register("name")}
								defaultValue={user?.nv_ten}
							/>
						</div>
						{/* Error when submitting */}
						{errors && (
							<p className="user-info__error-input">{errors?.name?.message}</p>
						)}
						<div className="user-info__input">
							<label htmlFor="username">Tên tài khoản</label>
							<input
								type="text"
								id="username"
								disabled
								value={user?.username}
							/>
						</div>
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
							<p className="user-info__error-input">{errors?.phone?.message}</p>
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
						<div className="user-info__input">
							<label htmlFor="timeStartWork">Thời gian vào làm</label>
							<input
								type="text"
								id="timeStartWork"
								value={user?.nv_thoigianvaolam}
								disabled
							/>
						</div>
						<div className="user-info__input">
							<label htmlFor="unit">Đơn vị</label>
							<input
								type="text"
								id="unit"
								disabled
								defaultValue={user?.donvi?.dv_ten}
							/>
						</div>
						<button className="user-info__save">Lưu</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
