export const formatPrice = (price) => {
	return new Intl.NumberFormat("vi", {
		style: "currency",
		currency: "VND",
	}).format(price);
};
