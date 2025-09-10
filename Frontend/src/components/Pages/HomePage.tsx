import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { books } from "@/data/data";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Skeleton } from "../ui/skeleton";
export interface Book {
	id?: number;
	name: string;
	image: string;
}
interface BooksProps {
	books: Book[];
	Limiter: boolean;
}

const HomePage = () => {
	const navigate = useNavigate();
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
					<Button
						className=" hover:scale-105"
						onClick={() => {
							navigate("/books");
						}}
					>
						See All <ChevronRight />
					</Button>
				</div>

				<Books books={books} Limiter={true} />
				<div className="py-14">
					<div className="flex justify-between">
						<h1
							className="mb-4 font-mono font-bold text-2xl uppercase tracking-wide
							"
						>
							Recommended
						</h1>
						<Button className=" hover:scale-105">
							See All <ChevronRight />
						</Button>
					</div>

					<Books books={books} Limiter={true} />
				</div>
			</div>
		</div>
	);
};

export default HomePage;

export const Books = ({ books, Limiter = true }: BooksProps) => {
	const LimitBooks = Limiter ? books.slice(0, 5) : books;
	const [Delay, setDelay] = useState(false);
	useEffect(() => {
		const delayed = setTimeout(() => {
			setDelay(true);
		}, 3000);
		return () => clearTimeout(delayed);
	}, []);

	return (
		<div>
			{Delay ? (
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8  place-items-center">
					{LimitBooks.map((book) => (
						<div
							key={book.id}
							className="flex flex-col items-center border rounded shadow-2xl p-4  hover:bg-gray-600 transition-all duration-400 relative  hover:scale-105 h-[300px] w-[160px] md:h-[320px] md:w-[180px] line-clamp-2 "
						>
							<img src={book.image} alt={book.name} className="w-auto md:h-48 mb-2" />

							<p className="font-semibold text-center py-4">{book.name}</p>
						</div>
					))}
				</div>
			) : (
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8  place-items-center">
					{LimitBooks.map((_, index) => (
						<Skeleton key={index} className="h-[240px] w-[150px]" />
					))}
				</div>
			)}
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
