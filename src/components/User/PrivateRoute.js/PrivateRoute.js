import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const user = useSelector((state) => state.auth.user);
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const history = useHistory();

	console.log(isAuthenticated);

	return (
		<Route
			{...rest}
			render={(props) => {
				return isAuthenticated ? <Component {...props} /> : history.g;
			}}
		/>
	);
};

export default PrivateRoute;
