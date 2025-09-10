// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { Skeleton } from "../ui/skeleton";

import BookListPage from "./BookListPage";

// interface ApiResponse {
// 	id: number;
// 	title: string;
// 	imageLinks?: {
// 		thumbnail?: string;
// 	};
// }
// const GenrePage = () => {
// 	const { genre } = useParams<{ genre: string }>();
// 	const FetchData = async () => {
// 		const res = await axios.get(`/v1/api/google/genre/${genre}`);
// 		return res.data;
// 	};

// 	const { data: Details = [], isLoading } = useQuery<ApiResponse[]>({
// 		queryKey: ["Genre-Data", genre],
// 		queryFn: FetchData,
// 	});
// 	return (
// 		<div className="">
// 			<h1
// 				className="mb-4 font-mono font-bold text-2xl uppercase tracking-wide
// 				p-4"
// 			>
// 				{genre} Books
// 			</h1>
// 			{isLoading ? (
// 				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8  place-items-center">
// 					{[...Array(10)].map((_, index) => (
// 						<Skeleton key={index} className="h-[240px] w-[150px]" />
// 					))}
// 				</div>
// 			) : (
// 				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8  place-items-center">
// 					{Details.map((book) => (
// 						<div
// 							key={book.id}
// 							className="flex flex-col items-center border rounded shadow-2xl p-4  hover:bg-gray-600 transition-all duration-400 relative  hover:scale-105  h-[300px] w-[160px] md:h-[320px] md:w-[180px] line-clamp-2"
// 						>
// 							<img src={book.imageLinks?.thumbnail} alt={book.title} className="w-auto md:h-48 mb-2" />

// 							<p className="font-semibold text-center py-4">{book.title}</p>
// 						</div>
// 					))}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default GenrePage;

const GenrePage = () => {
	return (
		<div>
			<BookListPage paramKey="genre" endpoint="/v1/api/google/genre" />
		</div>
	);
};

export default GenrePage;
