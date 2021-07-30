import React from "react";
import SidebarUser from "../../../../../components/User/SidebarUser/SidebarUser";
import "./style.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changeUserPassword } from "../../../../Auth/authSlice";

const schema = yup.object().shape({
	password: yup
		.string()
		.required("Vui lòng nhập mật khẩu")
		.min(6, "Mật khẩu phải ít nhất 6 kí tự")
		.max(20, "Mật khẩu tối đa 20 ký tự"),
	confirmPassword: yup
		.string()
		.required("Vui lòng xác nhận mật khẩu")
		.oneOf([yup.ref("password"), null], "Xác nhận mật khẩu chưa đúng"),
});

const ChangePasswordForm = () => {
	const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handleChangePassword = (data, e) => {
		e.preventDefault();

		const token = localStorage.getItem("userToken");
		const { password } = data;
		const { nv_diachi, nv_gioitinh, nv_namsinh, nv_sdt, nv_ten } = user;
		const dataUser = {
			password,
			nv_diachi,
			nv_gioitinh,
			nv_namsinh,
			nv_sdt,
			nv_ten,
		};

		const action = changeUserPassword({ dataUser, token });
		dispatch(action)
			.then((user) => console.log(user))
			.catch((error) => console.log(error));
	};

	return (
		<div className="change-pw">
			<div className="change-pw__container">
				<div className="change-pw__content">
					<SidebarUser />
					<form
						className="change-pw__form"
						onSubmit={handleSubmit(handleChangePassword)}
					>
						<h3 className="change-pw__title">Đổi mật khẩu</h3>
						<div className="change-pw__input">
							<label htmlFor="password">Mật khẩu mới</label>
							<input
								className={
									errors?.password?.message ? "change-pw__error-field" : ""
								}
								type="password"
								id="password"
								{...register("password")}
							/>
						</div>
						{/* Error when submitting */}
						{errors && (
							<p className="change-pw__error-input">
								{errors?.password?.message}
							</p>
						)}
						<div className="change-pw__input">
							<label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
							<input
								className={
									errors?.confirmPassword?.message
										? "change-pw__error-field"
										: ""
								}
								type="password"
								id="confirmPassword"
								{...register("confirmPassword")}
							/>
						</div>
						{/* Error when submitting */}
						{errors && (
							<p className="change-pw__error-input">
								{errors?.confirmPassword?.message}
							</p>
						)}
						<button className="change-pw__confirm">Xác nhận</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ChangePasswordForm;
