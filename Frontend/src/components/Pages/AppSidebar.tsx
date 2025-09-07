import pfp1 from "../../assets/19332-girl.jpeg";
import pfp2 from "../../assets/37013-don-lorenzo-pfp.jpeg";
import pfp3 from "../../assets/52571-dan-da-dan-pfp.jpeg";
import pfp4 from "../../assets/6651-blue-lock-anime.png";
import pfp5 from "../../assets/87717-rishu.jpeg";
import { ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../ui/sidebar";
import { ScrollArea } from "../ui/scroll-area";
import { Badge } from "../ui/badge";
interface ItemProps {
	title: string;
	url: string;
	Icon?: React.ComponentType;
}
const Items: ItemProps[] = [
	{ title: "Mystery & Thriller", url: "/genre/mystery-thriller" },
	{ title: "Science Fiction", url: "/genre/science-fiction" },
	{ title: "Fantasy", url: "/genre/fantasy" },
	{ title: "Romance", url: "/genre/romance" },
	{ title: "Historical Fiction", url: "/genre/historical-fiction" },
	{ title: "Non-Fiction", url: "/genre/non-fiction" },
	{ title: "Biography & Memoir", url: "/genre/biography-memoir" },
	{ title: "Horror", url: "/genre/horror" },
	{ title: "Young Adult", url: "/genre/young-adult" },
	{ title: "Literary Fiction", url: "/genre/literary-fiction" },
];
const AdditionalItems: ItemProps[] = [
	{ title: "Poetry", url: "/genre/poetry" },
	{ title: "Drama", url: "/genre/drama" },
	{ title: "Philosophy", url: "/genre/philosophy" },
	{ title: "Self-Help", url: "/genre/self-help" },
	{ title: "Travel", url: "/genre/travel" },
	{ title: "Cooking", url: "/genre/cooking" },
	{ title: "Art & Design", url: "/genre/art-design" },
	{ title: "Music", url: "/genre/music" },
];

interface Author {
	id: number;
	name: string;
	pfp: string;
}

const AdditionalAuthor: Author[] = [
	{
		id: 6,
		name: "Jane Austen",
		pfp: "https://randomuser.me/api/portraits/women/6.jpg",
	},
	{
		id: 7,
		name: "George Orwell",
		pfp: "https://randomuser.me/api/portraits/men/7.jpg",
	},
	{
		id: 8,
		name: "Toni Morrison",
		pfp: "https://randomuser.me/api/portraits/women/8.jpg",
	},
	{
		id: 9,
		name: "Mark Twain",
		pfp: "https://randomuser.me/api/portraits/men/9.jpg",
	},
	{
		id: 10,
		name: "Virginia Woolf",
		pfp: "https://randomuser.me/api/portraits/women/10.jpg",
	},
];
const Authors: Author[] = [
	{
		id: 1,
		name: "Agatha Christie",
		// pfp: "https://randomuser.me/api/portraits/women/1.jpg",
		pfp: pfp1,
	},
	{
		id: 2,
		name: "Isaac Asimov",
		pfp: pfp2,
	},
	{
		id: 3,
		name: "J.K. Rowling",
		pfp: pfp3,
	},
	{
		id: 4,
		name: "Stephen King",
		pfp: pfp4,
	},
	{
		id: 5,
		name: "Haruki Murakami",
		pfp: pfp5,
	},
];
const AppSidebar = () => {
	const InitialItems = Items.slice(0, 5);
	const collapsibleItems = [...Items.slice(5), ...AdditionalItems];
	const InitialAurhors = Authors.slice(0, 5);
	const AdditionalAuthors = [...Authors.slice(5), ...AdditionalAuthor];

	return (
		<div>
			<Sidebar>
				<ScrollArea className="h-full">
					<SidebarHeader>
						<SidebarMenu>
							<SidebarMenuItem className="text-xl uppercase font-mono  tracking-widest mt-4 ">
								<SidebarMenuButton className="text-xl uppercase">
									<a href="/">
										<strong>Home</strong> Library
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarHeader>
					{/*Main Content*/}
					<SidebarContent>
						{/*Initial Genres*/}
						<SidebarGroup>
							<SidebarGroupContent>
								<SidebarGroupLabel className="text-lg font-bold mb-4">Genres</SidebarGroupLabel>
								<SidebarMenu className="text-primary flex flex-col space-y-2">
									{InitialItems.map((item, index) => (
										<SidebarMenuItem key={index}>
											<SidebarMenuButton>
												<a href={item.url}>{item.title}</a>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
						{/*Additional Genres*/}
						<Collapsible defaultOpen className="group/collapsible">
							<SidebarGroup>
								<SidebarGroupLabel asChild>
									<CollapsibleTrigger className="mb-2">
										<span>See All</span>
										<Badge className="ml-2">{collapsibleItems.length}</Badge>{" "}
										<ChevronUp className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
									</CollapsibleTrigger>
								</SidebarGroupLabel>
								<CollapsibleContent>
									<SidebarGroupContent>
										<ScrollArea className="h-[200px]  rounded-md ">
											<SidebarMenu className="text-primary flex flex-col space-y-2 overflow-y-auto ">
												{collapsibleItems.map((item, index) => (
													<SidebarMenuItem key={index}>
														<SidebarMenuButton>
															<a href={item.url}>{item.title}</a>
														</SidebarMenuButton>
													</SidebarMenuItem>
												))}
											</SidebarMenu>
										</ScrollArea>
									</SidebarGroupContent>
								</CollapsibleContent>
							</SidebarGroup>
						</Collapsible>

						{/*Initial Authors*/}
						<SidebarGroup>
							<SidebarGroupContent>
								<SidebarGroupLabel className="text-lg font-bold mb-4">
									Popular Writers
								</SidebarGroupLabel>
								<SidebarMenu className="text-primary flex flex-col space-y-2">
									{InitialAurhors.map((item, index) => (
										<SidebarMenuItem key={index} className="flex items-center space-x-4 m-2">
											<img src={item.pfp} className="size-10 rounded-full" />

											<SidebarMenuButton>{item.name}</SidebarMenuButton>
											{/*Images*/}
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>

						{/*Additional Authors*/}
						<Collapsible defaultOpen className="group/collapsible">
							<SidebarGroup>
								<SidebarGroupLabel asChild>
									<CollapsibleTrigger className="mb-2">
										<span>See All</span>
										<Badge className="ml-2">{collapsibleItems.length}</Badge>{" "}
										<ChevronUp className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
									</CollapsibleTrigger>
								</SidebarGroupLabel>
								<CollapsibleContent>
									<SidebarGroupContent>
										<ScrollArea className="h-[200px]  rounded-md ">
											<SidebarMenu className="text-primary flex flex-col space-y-2 overflow-y-auto ">
												{AdditionalAuthors.map((item, index) => (
													<SidebarMenuItem key={index}>
														<SidebarMenuButton>{item.name}</SidebarMenuButton>
													</SidebarMenuItem>
												))}
											</SidebarMenu>
										</ScrollArea>
									</SidebarGroupContent>
								</CollapsibleContent>
							</SidebarGroup>
						</Collapsible>
					</SidebarContent>
					<SidebarFooter />
				</ScrollArea>
			</Sidebar>
		</div>
	);
};

export default AppSidebar;
