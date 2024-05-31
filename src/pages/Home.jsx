import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const [userList, setUserList] = useState([]);
	const [pagination, setPagination] = useState({ currPage: 1 });

	const getUserList = async () => {
		try {
			const res = await axios.get(
				`https://reqres.in/api/users?page=${pagination?.currPage}`
				// `https://reqres.in/api/users?page=2`
			);
			setUserList(res.data.data);
			// console.log(res.data);
			const pageRes = {
				currPage: res.data.page,
				perPage: res.data.per_page,
				prevPage: res.data.page - 1,
				total: res.data.total,
				totalPages: res.data.total_pages,
			};

			// console.log(`--`);
			// console.log(pageRes.currPage);
			// console.log(`--`);
			setPagination(pageRes);
		} catch (err) {
			console.log(err);
		}
	};

	const handleNext = () => {
		setPagination({
			...pagination,
			currPage: pagination?.currPage + 1,
			prevPage: pagination.prevPage + 1,
		});
		console.log(pagination);
	};

	const handlePrev = () => {
		setPagination({
			...pagination,
			currPage: pagination?.currPage - 1,
			prevPage: pagination.prevPage - 1,
		});
		console.log(pagination);
	};

	useEffect(() => {
		getUserList();
	}, []);

	useEffect(() => {
		getUserList();
	}, [pagination?.currPage]);

	return (
		<>
			<div className="grid items-center justify-center w-1/2 grid-cols-3 mx-auto mt-10 gap-y-10 gap-x-5">
				{userList.map((user, key) => (
					<Link to={`/user/${user.id}`} key={key}>
						<div className="flex flex-col items-center justify-center border rounded-lg shadow-lg gap-y-2 border-amber-200">
							<img
								src={user.avatar}
								alt={`Picture of ${user.first_name} ${user.last_name}`}
								className="h-20"
							/>
							<h3>{`${user.first_name} ${user.last_name}`}</h3>
							<p>E-mail : {user.email}</p>
						</div>
					</Link>
				))}
			</div>
			<div className="flex items-center justify-center gap-5">
				{pagination.prevPage ? (
					<button onClick={handlePrev} className="block">
						Back
					</button>
				) : null}
				{pagination.prevPage ? (
					<button onClick={handlePrev} className="block">
						{pagination.currPage - 1}
					</button>
				) : null}
				<div className="border border-red-500 rounded-xl ">
					{pagination.currPage}
				</div>
				{pagination.currPage !== pagination.totalPages ? (
					<button onClick={handleNext} className="block">
						{pagination.currPage + 1}
					</button>
				) : null}
				{pagination.currPage !== pagination.totalPages ? (
					<button onClick={handleNext} className="block">
						Next
					</button>
				) : null}
			</div>
		</>
	);
};
export default Home;
