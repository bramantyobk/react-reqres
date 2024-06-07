import { Link } from "react-router-dom";
const UserListComp = (props) => {
	const { userList } = props;

	return (
		<div className="grid justify-center grid-cols-1 mx-auto bg-white justify-items-center items-strech gap-y-3 md:grid-cols-3 md:gap-y-7 md:gap-x-10">
			{userList.map((user, key) => (
				<div className="container border border-blue-500 w-fit h-fit" key={key}>
					<div className="relative h-[38vh] w-[17vw]">
						<div className="absolute left-5 top-3 bg-gray-400 w-[15vw] h-[35vh] rotate-6 rounded-2xl"></div>

						<div className="absolute bg-amber-200 left-5 top-3 transition duration-300 w-[15vw] h-[35vh] rotate-6 rounded-2xl hover:rotate-0 pt-6">
							<div className="flex flex-col items-center justify-center gap-y-2">
								<h3 className="px-2 py-1 text-xl font-bold text-gray-800 bg-white rounded-md bg-opacity-95 w-fit">
									{user.last_name}
								</h3>

								<div className="flex justify-center h-auto py-2 bg-white w-36 bg-opacity-95">
									<img src={user?.avatar} alt="" className="rounded-lg" />
								</div>
								<p className="text-xl font-extrabold text-center text-grey-800">
									{`${user.first_name} ${user.last_name}`}
								</p>
								<Link to={`user/${user.id}`}>
									<button className="block rounded-md bg-[#FE5401] px-4 py-2 text-lg font-bold text-white hover:bg-[#FF7308]">
										Detail
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default UserListComp;
