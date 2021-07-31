import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../../../../../components/User/Footer/Footer";
import Header from "../../../../../components/User/Header/Header";
import UserInfo from "../components/UserInfo/UserInfo";

const Main = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header />
			<UserInfo />
			<Footer />
		</>
	);
};

export default Main;
