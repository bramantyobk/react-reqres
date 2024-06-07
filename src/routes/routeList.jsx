import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import UserDetail from "../pages/UserDetail";
import ProtectedRoute from "./ProtectedRoute";

export const routeList = [
	{ path: "/", element: <Login /> },
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/home",
		element: (
			<ProtectedRoute>
				<Home />
			</ProtectedRoute>
		),
	},
	{
		path: "/home/user/:id",
		element: (
			<ProtectedRoute>
				<UserDetail />
			</ProtectedRoute>
		),
	},
];
