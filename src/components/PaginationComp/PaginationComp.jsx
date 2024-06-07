const PaginationComp = (props) => {
	const { handleNext, handlePrev, pagination } = props;

	return (
		<div className="flex items-center justify-center">
			<div className="flex items-center justify-around w-full border-t border-gray-200">
				<button
					onClick={handlePrev}
					style={{
						visibility: pagination.prevPage === 0 ? "hidden" : "visible",
					}}
					className="block"
				>
					<div className="flex items-center py-3 text-gray-600 cursor-pointer hover:text-indigo-700">
						<svg
							width="14"
							height="8"
							viewBox="0 0 14 8"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.1665 4H12.8332"
								stroke="currentColor"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M1.1665 4L4.49984 7.33333"
								stroke="currentColor"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M1.1665 4.00002L4.49984 0.666687"
								stroke="currentColor"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span className="ml-3 text-sm font-medium leading-none ">Prev</span>
					</div>
				</button>
				<div className="flex items-center justify-center">
					{pagination.prevPage !== 0 && (
						<button
							onClick={handlePrev}
							className="block px-2 py-3 text-sm font-medium leading-none text-gray-600 border-t border-transparent cursor-pointer hover:text-indigo-700 hover:border-indigo-400"
						>
							{pagination.currPage - 1}
						</button>
					)}
					<button className="block px-2 py-3 text-sm font-medium leading-none text-gray-600 border border-indigo-700 cursor-pointer hover:text-indigo-700 hover:border-indigo-400">
						{pagination.currPage}
					</button>
					{pagination.currPage !== pagination.totalPages && (
						<button
							onClick={handleNext}
							className="block px-2 py-3 text-sm font-medium leading-none text-gray-600 border-t border-transparent cursor-pointer hover:text-indigo-700 hover:border-indigo-400"
						>
							{pagination.currPage + 1}
						</button>
					)}
				</div>
				<button
					onClick={handleNext}
					style={{
						visibility:
							pagination.currPage !== pagination.totalPages
								? "visible"
								: "hidden",
					}}
					className="block"
				>
					<div className="flex items-center py-3 text-gray-600 cursor-pointer hover:text-indigo-700">
						<span className="mr-3 text-sm font-medium leading-none">Next</span>
						<svg
							width="14"
							height="8"
							viewBox="0 0 14 8"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.1665 4H12.8332"
								stroke="currentColor"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M9.5 7.33333L12.8333 4"
								stroke="currentColor"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M9.5 0.666687L12.8333 4.00002"
								stroke="currentColor"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</button>
			</div>
		</div>
	);
};
export default PaginationComp;
