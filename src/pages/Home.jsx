import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
	const [userList, setUserList] = useState([]);

	const getUserList = async () => {
		try {
			const res = await axios.get(`https://reqres.in/api/users`);
			console.log(res.data.data);
			setUserList(res.data.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUserList();
	}, []);

	return (
		<>
			<div className="grid items-center justify-center w-1/2 grid-cols-3 mx-auto mt-10 gap-y-10 gap-x-5">
				{userList.map((user, key) => (
					<div
						key={key}
						className="flex flex-col items-center justify-center border rounded-lg shadow-lg gap-y-2 border-amber-200"
					>
						<img
							src={user.avatar}
							alt={`Picture of ${user.first_name} ${user.last_name}`}
							className="h-20"
						/>
						<h3>{`${user.first_name} ${user.last_name}`}</h3>
						<p>E-mail : {user.email}</p>
					</div>
				))}
			</div>
		</>
	);
};
export default Home;
