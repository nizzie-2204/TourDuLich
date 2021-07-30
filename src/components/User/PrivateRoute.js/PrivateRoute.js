import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";
import { getUserInfo } from "../../../features/Auth/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const override = css`
	display: block;
	text-align: center;
	margin: 28rem auto;
`;

const PrivateRoute = ({ component: Component, ...rest }) => {
	const user = useSelector((state) => state.auth.user);
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const authLoading = useSelector((state) => state.auth.authLoading);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	const getInfo = async () => {
	// 		const token = localStorage.getItem("userToken");

	// 		if (token) {
	// 			const action = getUserInfo(token);
	// 			dispatch(action)
	// 				.then(unwrapResult)
	// 				.catch((error) => console.log(error));
	// 		}
	// 	};

	// 	getInfo();
	// }, []);

	return (
		<>
			{authLoading ? (
				<FadeLoader css={override} height="15px" width="2px" radius="2px" />
			) : (
				<Route
					{...rest}
					render={(props) => {
						return isAuthenticated && user ? (
							<Component {...props} />
						) : (
							<Redirect to="/" />
						);
					}}
				/>
			)}
		</>
	);
};

export default PrivateRoute;
