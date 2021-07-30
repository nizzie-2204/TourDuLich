import React from "react";
import Header from "../../../../../components/User/Header/Header";
import Footer from "../../../../../components/User/Footer/Footer";
import UserInfo from "../components/UserInfo/UserInfo";
import { useEffect } from "react";
import { getUserInfo } from "../../../../Auth/authSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

const Main = () => {
	const dispatch = useDispatch();

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
