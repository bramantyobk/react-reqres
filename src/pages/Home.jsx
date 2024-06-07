import axios from "axios";
import { useState, useEffect } from "react";
import UserListComp from "../components/UserListComp/UserListComp";
import PaginationComp from "../components/PaginationComp/PaginationComp";

const Home = () => {
	const [userList, setUserList] = useState([]);
	const [pagination, setPagination] = useState({ currPage: 1 });

	const getUserList = async () => {
		try {
			const res = await axios.get(
				`https://reqres.in/api/users?page=${pagination?.currPage}`
			);
			setUserList(res?.data.data);
			const pageRes = {
				currPage: res.data.page,
				perPage: res.data.per_page,
				prevPage: res.data.page - 1,
				total: res.data.total,
				totalPages: res.data.total_pages,
			};
			setPagination(pageRes);
		} catch (err) {
			console.log(err);
		}
	};

	const handleNext = () => {
		setPagination({
			...pagination,
			currPage: pagination?.currPage + 1,
			prevPage: pagination?.prevPage + 1,
		});
	};

	const handlePrev = () => {
		setPagination({
			...pagination,
			currPage: pagination?.currPage - 1,
			prevPage: pagination.prevPage - 1,
		});
	};

	useEffect(() => {
		getUserList();
	}, []);

	useEffect(() => {
		getUserList();
	}, [pagination?.currPage]);

	return (
		<section className="flex flex-col items-center justify-center h-screen bg-rose-50">
			<div className="p-10 bg-white w-fit rounded-xl h-fit space-y-7 md:w-auto">
				<UserListComp userList={userList} />
				<PaginationComp
					handleNext={handleNext}
					handlePrev={handlePrev}
					pagination={pagination}
				/>
			</div>
		</section>
	);
};
export default Home;
