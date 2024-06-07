import { loginImg } from "../../assets";

const LoginComp = (props) => {
	const {
		handleChangeEmail,
		handleChangePassword,
		handleLogin,
		handleRegister,
	} = props;

	return (
		<div className="relative flex flex-col m-6 bg-white shadow-2xl gap-y-10 md:flex-row md:gap-y-0 md:m-0 rounded-xl">
			<div className="p-6 md:p-20">
				<h2 className="mb-5 font-mono text-4xl font-bold">Log In</h2>
				<p className="max-w-sm font-sans font-light mb-7 text-grey-600">
					Log in to your account to see
					<span className="font-bold"> REQRES </span>users account
				</p>
				<label
					htmlFor="email"
					className="block font-sans text-lg font-light text-black"
				>
					E-Mail<span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					className="block w-full p-5 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
					id="email"
					name="email"
					placeholder="Enter your email address"
					required
					onChange={handleChangeEmail}
				/>
				<label
					htmlFor="password"
					className="block mt-5 font-sans text-lg font-light text-black"
				>
					Passwords<span className="text-red-500">*</span>
				</label>
				<input
					type="password"
					className="block w-full p-5 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
					id="password"
					name="password"
					placeholder="Enter your password"
					required
					onChange={handleChangePassword}
				/>

				<div className="flex flex-col items-center justify-between mt-6 gap-y-6 md:flex-row md:gap-y-0">
					<div className="font-thin text-cyan-700">Forgot Password?</div>
					<button
						type="submit"
						onClick={handleLogin}
						className="flex items-center justify-center w-full p-3 font-sans font-bold text-white rounded-md shadow-sm md:w-auto gap-x-4 px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
					>
						<span>Log In</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-7"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="#ffffff"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<line x1="5" y1="12" x2="19" y2="12" />
							<line x1="13" y1="18" x2="19" y2="12" />
							<line x1="13" y1="6" x2="19" y2="12" />
						</svg>
					</button>
				</div>

				<div className="mt-8 border-b border-b-gray-300"></div>

				<div className="flex flex-col items-center justify-center">
					<p className="py-5 font-thin text-center text-gray-600">
						Don't have an account?
					</p>
					<button
						onClick={handleRegister}
						className="w-full p-3 px-9 font-sans font-bold rounded-md shadow-sm md:w-auto bg-cyan-800 bg-opacity-15 shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150 text-gray-500 hover:text-white"
					>
						Register
					</button>
				</div>
			</div>

			<img
				src={loginImg}
				alt="water, decorative login image"
				className="w-[430px] hidden md:block"
			/>
		</div>
	);
};
export default LoginComp;
