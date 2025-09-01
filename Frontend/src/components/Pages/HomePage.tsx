import { ChevronRight } from "lucide-react";
import image2 from "../../assets/BooksAssets/InSearchOFLostTimeByMarcelProd.jpeg";
import image4 from "../../assets/BooksAssets/TheCatcherintheRy.jpeg";
import image5 from "../../assets/BooksAssets/TheGreatGatsby.jpeg";
import { Button } from "../ui/button";
interface Book {
	id: number;
	title: string;
	image: string;
}
interface BooksProps {
	books: Book[];
}

const books: Book[] = [
	{
		id: 1,
		title: "The Great Gatsby",
		image: image2,
	},
	{
		id: 2,
		title: "1984",
		image: image2,
	},
	{
		id: 3,
		title: "To Kill a Mockingbird",
		image: image4,
	},
	{
		id: 4,
		title: "Pride and Prejudice",
		image: image4,
	},
	{
		id: 5,
		title: "Moby-Dick",
		image: image5,
	},
	{
		id: 6,
		title: "War and Peace",
		image: image2,
	},
	{
		id: 7,
		title: "The Catcher in the Rye",
		image: image2,
	},
	{
		id: 8,
		title: "Brave New World",
		image: image4,
	},
	{
		id: 9,
		title: "Jane Eyre",
		image: image2,
	},
	{
		id: 10,
		title: "The Hobbit",
		image: image4,
	},
];

const HomePage = () => {
	return (
		<div>
			<div className="p-4">
				<div className="flex justify-between">
					<h1
						className="mb-4 font-mono font-bold text-2xl uppercase tracking-wide
						"
					>
						Most Popular
					</h1>
					<Button className=" hover:scale-105">
						See All <ChevronRight />
					</Button>
				</div>

				<Books books={books} />
				<div className="py-14">
					<div className="flex justify-between">
						<h1
							className="mb-4 font-mono font-bold text-2xl uppercase tracking-wide
							"
						>
							Most Popular
						</h1>
						<Button className=" hover:scale-105">
							See All <ChevronRight />
						</Button>
					</div>

					<Books books={books} />
				</div>
			</div>
		</div>
	);
};

export default HomePage;

const Books = ({ books }: BooksProps) => {
	const LimitBooks = books.slice(0, 5);
	return (
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8  place-items-center">
			{LimitBooks.map((book) => (
				<div
					key={book.id}
					className="flex flex-col items-center border rounded shadow-2xl p-4  hover:bg-gray-600 transition-all duration-400 relative  hover:scale-105"
				>
					<img src={book.image} alt={book.title} className="w-auto md:h-48 mb-2" />

					<p className="font-semibold text-center py-4">{book.title}</p>
				</div>
			))}
		</div>
	);
};

// const Books = ({ books }: BooksProps) => {
// 	return (
// 		<ScrollArea className="w-full max-w-6xl rounded-md border whitespace-nowrap ">
// 			<div className="flex space-x-8 gap-12 p-4">
// 				{books.map((item) => (
// 					<figure key={item.title} className="shrink-0 w-48">
// 						<div className="overflow-hidden rounded-md">
// 							<img
// 								src={item.image}
// 								alt={`Photo by ${item.id}`}
// 								className="w-full h-64 object-cover"
// 								width={192}
// 								height={256}
// 							/>
// 						</div>
// 						<figcaption className="text-muted-foreground pt-2 text-xs">
// 							Photo by <span className="text-foreground font-semibold">{item.title}</span>
// 						</figcaption>
// 					</figure>
// 				))}
// 			</div>
// 			<ScrollBar orientation="horizontal" />
// 		</ScrollArea>
// 	);
// };

//TODO: HOver reveal Animation
//TODO: Create Component to remove redunancy
