import { Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "./dashboard";
import Login from "./login";
import Page404 from "./page404";
import UnauthorizedAccess from "./unauthorized-access";

const BaseRouter = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<DashBoard />} />
			<Route path="/404" element={<Page404 />} />
			<Route path="/unauthorized-access" element={<UnauthorizedAccess />} />
			<Route path="*" element={<Navigate replace to="/404" />} />
		</Routes>
	);
};

export default BaseRouter;
