import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getUserInfo } from "../../../features/Auth/authSlice";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

const override = css`
	display: block;
	text-align: center;
	margin: 28rem auto;
`;

const PublicRoute = ({ component: Component, restricted = false, ...rest }) => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const authLoading = useSelector((state) => state.auth.authLoading);

	const dispatch = useDispatch();

	return (
		<>
			{authLoading ? (
				<FadeLoader css={override} height="15px" width="2px" radius="2px" />
			) : (
				<Route
					{...rest}
					render={(props) => {
						return isAuthenticated && restricted ? (
							<Redirect to="/" />
						) : (
							<Component {...props} />
						);
					}}
				/>
			)}
		</>
	);
};

export default PublicRoute;
