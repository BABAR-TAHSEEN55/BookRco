import pfp from "../../assets/37013-don-lorenzo-pfp.jpeg";
import { BellIcon, LogOut, Moon, Settings, Sun, User } from "lucide-react";
import { AvatarFallback, Avatar, AvatarImage } from "../ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useTheme } from "../theme-Provider";
import { Input } from "../ui/input";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "../ui/sidebar";

interface UserData {
	id?: number;
	name: string;
	email: string;
	picture: string;
}
interface MeResponse {
	user: UserData;
	isAuthenticated?: boolean;
}
const Navbar = () => {
	// const FetchData = async () => {
	// 	const { data } = await axios.get<MeResponse>("/v1/auth/me");
	// 	console.log(data);
	// 	return data.user;
	// };

	// const {
	// 	data: UserInfo,
	// 	isLoading,
	// 	error,
	// } = useQuery({
	// 	queryKey: ["User-Data"],
	// 	queryFn: FetchData,
	// });
	const { setTheme, theme } = useTheme();
	const HandleToggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};
	const nav = useNavigate();
	// if (isLoading) return <p>Loading...</p>;
	// if (error) return <p>Error: {error.message}</p>;
	return (
		<nav className="m-4 rounded-xl ">
			{/*{isPending && <span>Loading...</span>}
			{error && <span> Error while getting the data</span>}*/}
			<div className="container mx-auto flex justify-between m-4 p-2 rounded-xl  border-gray/20  items-center">
				<div className="">
					{/*<p>Search</p>*/}

					<div className="block md:hidden">
						<SidebarTrigger />
					</div>
					<div className="hidden md:block">
						<Input type="search" placeholder="Search..." />
					</div>
				</div>
				<div className="flex items-center space-x-8 ">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="icon" onClick={HandleToggleTheme}>
								<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
								<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
								<span className="sr-only">Toggle theme</span>
							</Button>
						</DropdownMenuTrigger>
						{/*<DropdownMenuContent align="end">
							<DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
						</DropdownMenuContent>*/}
					</DropdownMenu>
					{/*<BellIcon />*/}
					{/*{UserInfo ? (
						<>
							<p>{UserInfo.name}</p>
							{console.log(UserInfo.picture)}
							<DropdownMenu>
								<DropdownMenuTrigger>
									<Avatar>
										<AvatarImage src={UserInfo.picture} />

										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
									<DropdownMenuContent>
										<DropdownMenuLabel>My Account</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											<User />
											Profile
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Settings /> Settings
										</DropdownMenuItem>
										<DropdownMenuItem variant="destructive">
											<LogOut onClick={() => {}} /> Logout
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenuTrigger>
							</DropdownMenu>
						</>
					) : (
						<Button
							onClick={() => {
								nav("/v1/auth/register");
							}}
						>
							SignIn
						</Button>
					)}*/}
					<p>Suho Kim</p>
					<Avatar>
						<AvatarImage src={pfp} />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
