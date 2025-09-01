import Navbar from "./components/layout/Navbar.tsx";
import AppSidebar from "./components/Pages/AppSidebar.tsx";
import HomePage from "./components/Pages/HomePage.tsx";

const App = () => {
	return (
		<div className="flex h-full w-full">
			<AppSidebar />
			<div className="flex flex-col flex-1">
				<Navbar />
				<main className="flex-1 p-4 overflow-auto">
					<HomePage />
				</main>
			</div>
		</div>
	);
};

export default App;
