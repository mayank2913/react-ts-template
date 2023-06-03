import { BrowserRouter } from "react-router-dom";
import BaseRouter from "./components/BaseRouter";
import "./App.css";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				{/* <Auth> */}
				{/* <Authentication> */}
				<BaseRouter />
				{/* </Authentication> */}
				{/* </Auth> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
