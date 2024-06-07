import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginComp from "../components/LoginComp/LoginComp";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [toast, setToast] = useState(false);
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
			if (
				!payload.email ||
				!payload.password ||
				payload.password !== "cityslicka"
			) {
				setToast(true);
				throw new Error("Please check your email or password again!");
			}
			const res = await axios.post(`https://reqres.in/api/login`, payload);
			const tokenRes = res.data.token;
			setToast(true);
			localStorage.setItem("access_token", tokenRes);

			setTimeout(() => {
				navigate("/home");
			}, 2000);
		} catch (err) {
			setErrorLogin("Please check your email or password again!");
			setToast(true);
			setTimeout(() => {
				setToast(false);
			}, 5000);
		}
	};

	const handleRegister = () => {
		navigate("/register");
	};

	return (
		<section className="flex flex-col items-center justify-center min-h-screen bg-rose-50">
			{toast && (
				<div className="p-10">
					{errorLogin ? (
						<h1 className="p-2 bg-red-300 rounded-xl">{errorLogin}</h1>
					) : (
						<h1 className="p-2 bg-green-300 rounded-lg">Login Successful</h1>
					)}
				</div>
			)}

			<LoginComp
				handleChangeEmail={handleChangeEmail}
				handleChangePassword={handleChangePassword}
				handleLogin={handleLogin}
				handleRegister={handleRegister}
			/>
		</section>
	);
};

export default Login;
