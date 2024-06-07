import Login from "../pages/Login";
import Home from "../pages/Home";
import UserDetail from "../pages/UserDetail";
import Register from "../pages/Register";
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
	// {
	// 	path: "/user/:id",
	// 	element: (
	// 		<ProtectedRoute>
	// 			<UserDetail />
	// 		</ProtectedRoute>
	// 	),
	// },
];
