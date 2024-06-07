import axios from "axios";
import RegisterComp from "../components/RegisterComp/RegisterComp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [toast, setToast] = useState(false);
	const [errorRegister, setErrorRegister] = useState("");

	const navigate = useNavigate();

	const handleChangeEmail = (event) => {
		// console.log(event);
		setEmail(event.target.value);
	};
	const handleChangePassword = (event) => {
		// console.log(event);
		setPassword(event.target.value);
	};

	const handleRegister = async () => {
		const payload = {
			email: email,
			password: password,
		};

		try {
			if (
				!payload.email ||
				!payload.password ||
				payload.email !== "eve.holt@reqres.in"
			) {
				throw new Error("E-mail already registered");
			}
			const res = await axios.post(`https://reqres.in/api/register`, payload);
			setToast(true);

			setTimeout(() => {
				navigate("/");
			}, 2000);
		} catch (err) {
			setErrorRegister("E-mail already registered");
			setToast(true);
			setTimeout(() => {
				setToast(false);
			}, 5000);
		}
	};

	return (
		<section className="flex flex-col items-center justify-center min-h-screen bg-rose-50">
			{toast && (
				<div className="p-10">
					{errorRegister ? (
						<h1 className="p-2 bg-red-300 rounded-xl">{errorRegister}</h1>
					) : (
						<h1 className="p-2 bg-green-300 rounded-lg">Register Successful</h1>
					)}
				</div>
			)}
			<RegisterComp
				handleChangeEmail={handleChangeEmail}
				handleChangePassword={handleChangePassword}
				handleRegister={handleRegister}
			/>
		</section>
	);
};
export default Register;
