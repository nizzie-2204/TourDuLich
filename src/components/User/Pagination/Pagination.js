import React from "react";
import "./style.scss";

const Pagination = ({ totalPages, paginate }) => {
	const totalPagesArr = [];

	for (let i = 1; i <= totalPages; i++) {
		totalPagesArr.push(i);
	}

	return (
		<div className="pagination">
			<div className="pagination__container">
				<div className="pagination__content">
					{totalPagesArr?.map((page) => {
						return (
							<div
								key={page}
								className="pagination__page"
								onClick={() => {
									paginate(page);
								}}
							>
								{page}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Pagination;
