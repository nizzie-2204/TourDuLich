import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import UserInfo from "../../components/UserInfo/UserInfo";

const Account = () => {
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

export default Account;
