import { unwrapResult } from "@reduxjs/toolkit";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../authSlice";
import "./style.scss";

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const usernameRef = useRef(null);
	const passwordRef = useRef(null);

	const handleOnChangeUsername = (e) => {
		usernameRef.current.value = e.target.value;
	};

	const handleOnChangePassword = (e) => {
		passwordRef.current.value = e.target.value;
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const username = usernameRef.current.value;
		const password = passwordRef.current.value;

		const action = login({ username, password });

		dispatch(action)
			.then(unwrapResult)
			.then((data) => {
				// User -> go to home page
				// if (data.message.ltk_id === 3) {
				// 	localStorage.setItem("token", token);
				// 	// history.push("/");
				// }
				console.log(data);
				// Admin -> go to admin dashboard
				// if (data.message.ltk_id === 1 || data.message.ltk_id === 2) {
				// localStorage.setItem("token", token)
				// 	history.push("/");
				// }
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="login">
			<form className="login__form" onSubmit={handleLogin}>
				<h3 className="login__title">Đăng nhập</h3>
				<div className="login__input">
					<label htmlFor="username">Tên tài khoản</label>
					<input
						ref={usernameRef}
						onChange={handleOnChangeUsername}
						type="text"
						id="username"
					/>
				</div>
				<div className="login__input">
					<label htmlFor="password">Mật khẩu</label>
					<input
						ref={passwordRef}
						onChange={handleOnChangePassword}
						type="text"
						id="password"
					/>
				</div>
				<button className="login__submit">Đăng nhập</button>
			</form>
		</div>
	);
};

export default Login;
