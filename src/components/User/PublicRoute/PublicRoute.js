import { css } from "@emotion/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, useHistory, useLocation } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";

const override = css`
	display: block;
	text-align: center;
	margin: 28rem auto;
`;

const PublicRoute = ({ component: Component, restricted = false, ...rest }) => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const authLoading = useSelector((state) => state.auth.authLoading);

	const location = useLocation();
	console.log(location);
	const history = useHistory();

	// const dispatch = useDispatch();

	return (
		<>
			{authLoading ? (
				<FadeLoader css={override} height="15px" width="2px" radius="2px" />
			) : (
				<Route
					{...rest}
					render={(props) => {
						return isAuthenticated && restricted ? (
							history.goBack()
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
