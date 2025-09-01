import Navbar from "./components/layout/Navbar.tsx";
import AppSidebar from "./components/Pages/AppSidebar.tsx";
import BooksInfo from "./components/Pages/BooksInfo.tsx";
import HomePage from "./components/Pages/HomePage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<div className="flex h-full w-full">
				<AppSidebar />
				<div className="flex flex-col flex-1">
					<Navbar />
					<main className="flex-1 p-4 overflow-auto">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/new" element={<BooksInfo />} />
						</Routes>
					</main>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
