export const formatPrice = (price) => {
	return new Intl.NumberFormat("vi", {
		style: "currency",
		currency: "VND",
	}).format(price);
};

export const totalPrice = (price, supportMoney) => {
	return price - supportMoney;
};

export const formatDate = (date) => {
	return date.split("-").reverse().join("-");
};

export const checkValidDateTour = (currDate, startDate, endDate) => {
	// Ngày hiện tại > ngày kết thúc đăng ký tour hoặc
	// ngày hiện tại < ngày bắt đầu đăng ký tour
	// ===> không cho đăng ký

	if (
		currDate.getTime() >= new Date(startDate).getTime() &&
		currDate.getTime() <= new Date(endDate).getTime()
	) {
		return true;
	} else {
		return false;
	}
};

export const totalPages = (total, limit) => {
	return Math.ceil(total / limit);
};
