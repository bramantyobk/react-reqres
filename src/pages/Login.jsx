import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [token, setToken] = useState("");
	const [errorLogin, setErrorLogin] = useState("");

	const navigate = useNavigate();

	const handleChangeEmail = (event) => {
		// console.log(event);
		setEmail(event.target.value);
	};
	const handleChangePassword = (event) => {
		// console.log(event);
		setPassword(event.target.value);
	};

	const handleLogin = async () => {
		const payload = {
			email: email,
			password: password,
		};

		try {
			const res = await axios.post(`https://reqres.in/api/login`, payload);
			// console.log(res.data.token);

			const tokenRes = res.data.token;
			setToken(tokenRes);
			localStorage.setItem("access_token", tokenRes);

			setTimeout(() => {
				navigate("/home");
			}, 2000);
		} catch (err) {
			console.log(err.response);
			setErrorLogin(err.response.data.error);
		}
	};

	return (
		<>
			{/* <h2 className="text-5xl bg-green-300 m-72">Login Page</h2> */}
			<div className="flex flex-col items-center justify-center gap-4 mt-20">
				{token && (
					<h1 className="p-2 bg-green-300 rounded-lg">Login Berhasil</h1>
				)}
				{errorLogin && (
					<h1 className="p-2 bg-red-300 rounded-lg">{errorLogin}</h1>
				)}

				<div className="flex flex-col items-start justify-center">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						className="p-2 border border-red-200 rounded-md"
						placeholder="abcde@gmail.com"
						id="email"
						name="email"
						autoFocus="on"
						autoComplete="on"
						onChange={handleChangeEmail}
					/>
				</div>
				<div className="flex flex-col items-start justify-center">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="p-2 border border-red-200 rounded-md "
						placeholder="masukkan password"
						id="password"
						name="password"
						onChange={handleChangePassword}
					/>
				</div>
				<button
					onClick={handleLogin}
					className="p-2 text-white bg-red-500 rounded-lg"
				>
					Login
				</button>
			</div>
		</>
	);
};

export default Login;
