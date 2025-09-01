import pfp from "../../assets/37013-don-lorenzo-pfp.jpeg";
import { BellIcon, Moon, Sun } from "lucide-react";

import { AvatarFallback, Avatar, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useTheme } from "../theme-Provider";
import { Input } from "../ui/input";

const Navbar = () => {
	const { setTheme } = useTheme();
	return (
		<nav className="m-4 rounded-xl ">
			<div className="container mx-auto flex justify-between m-4 p-2 rounded-xl  border-gray/20  items-center">
				<div>
					{/*<p>Search</p>*/}
					<Input type="search" placeholder="Search..." />
				</div>
				<div className="flex items-center space-x-6">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="icon">
								<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
								<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
								<span className="sr-only">Toggle theme</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<BellIcon />
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
