import Login from "../pages/Login";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";

export const routeList = [
	{ path: "/", element: <Login /> },
	{
		path: "/home",
		element: (
			<ProtectedRoute>
				<Home />
			</ProtectedRoute>
		),
	},
];
