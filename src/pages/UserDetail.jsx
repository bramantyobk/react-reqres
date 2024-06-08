import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const UserDetail = () => {
	const param = useParams();
	const [user, setUser] = useState({});

	const getUserDetail = async () => {
		try {
			const res = await axios.get(`https://reqres.in/api/users/${param.id}`);
			console.log(res);
			setUser(res.data.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUserDetail();
	}, []);

	return (
		<section className="grid h-screen bg-rose-50">
			<div className="flex flex-col items-center justify-center text-gray-900 h-3/4">
				<img
					src={user.avatar}
					alt={`Picture of ${user.first_name} ${user.last_name}`}
					className="block object-cover object-center w-auto h-full rounded-lg shadow-md"
				/>

				<div className="w-full -mt-10 md:w-3/4 lg:w-1/3">
					<div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg md:justify-start md:items-start">
						<div className="flex items-baseline">
							<span className="inline-block px-2 text-xs font-semibold tracking-wide text-teal-800 uppercase bg-teal-200 rounded-full">
								id
							</span>
							<div className="ml-2 text-xs font-semibold tracking-wider text-gray-600 uppercase">
								{user.id}
							</div>
						</div>

						<h4 className="my-2 text-xl font-extrabold leading-tight uppercase truncate">
							{`${user.first_name} ${user.last_name}`}
						</h4>

						<div className="flex justify-start gap-x-2 lg:gap-x-14">
							<div>E-mail :</div>
							<div className="font-semibold text-teal-600 text-md">
								{user.email}
							</div>
						</div>

						<div className="flex justify-start gap-x-2 lg:gap-x-6">
							<div>First Name :</div>
							<div className="font-semibold text-teal-600 text-md">
								{user.first_name}
							</div>
						</div>

						<div className="flex justify-start gap-x-2 lg:gap-x-6">
							<div>Last Name :</div>
							<div className="font-semibold text-teal-600 text-md">
								{user.last_name}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UserDetail;
