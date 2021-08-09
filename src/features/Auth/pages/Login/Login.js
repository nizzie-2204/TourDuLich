import { yupResolver } from "@hookform/resolvers/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { login } from "../../authSlice";
import "./style.scss";

const schema = yup.object().shape({
	username: yup.string().required("Vui lòng nhập tên tài khoản"),
	password: yup
		.string()
		.required("Vui lòng nhập mật khẩu")
		.min(6, "Mật khẩu phải ít nhất 6 kí tự")
		.max(20, "Mật khẩu tối đa 20 ký tự"),
});

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [errorSubmit, setErrorSubmit] = useState(null);

	const handleLogin = (data, e) => {
		e.preventDefault();
		const { username, password } = data;

		const action = login({ username, password });

		dispatch(action)
			.then(unwrapResult)
			.then((data) => {
				console.log(data.message.ltk_id);
				// User -> go to home page
				if (data.message.ltk_id === 3) {
					localStorage.setItem("userToken", data.Token);
					history.push("/tours");
				}
				// // Admin system -> go to admin unit
				if (data.message.ltk_id === 1) {
					localStorage.setItem("adminSystemToken", data.Token);
					history.push("/admin/unit");
				}

				// // // Admin unit -> go to admin employee || admin tour
				if (data.message.ltk_id === 2) {
					console.log(data.message.ltk_id);
					localStorage.setItem("adminUnitToken", data.Token);
					history.push("/admin/employee");
				}
			})
			.catch((error) => {
				setErrorSubmit("Tài khoản hoặc mật khẩu không đúng");
			});
	};

	return (
		<div className="login">
			<form className="login__form" onSubmit={handleSubmit(handleLogin)}>
				<h3 className="login__title">Đăng nhập</h3>
				<div className="login__input">
					<label htmlFor="username">Tên tài khoản</label>
					<input
						className={errors?.username?.message ? "login__error-field" : ""}
						type="text"
						id="username"
						{...register("username")}
					/>

					{/* Error when submitting */}
					{errors && (
						<p className="login__error-input">{errors?.username?.message}</p>
					)}
				</div>
				<div className="login__input">
					<label htmlFor="password">Mật khẩu</label>
					<input
						className={errors?.password?.message ? "login__error-field" : ""}
						type="password"
						id="password"
						{...register("password")}
					/>

					{/* Error when submitting */}
					{errors && (
						<p className="login__error-input">{errors?.password?.message}</p>
					)}
				</div>

				<button className="login__submit">Đăng nhập</button>

				{/* Error when submitting */}
				{errorSubmit && (
					<p className="login__error-submit">
						<span>
							<ion-icon name="warning-outline"></ion-icon>
						</span>
						<span>{errorSubmit}</span>
					</p>
				)}
			</form>
		</div>
	);
};

export default Login;
