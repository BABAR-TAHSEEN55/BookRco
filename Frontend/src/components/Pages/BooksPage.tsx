import { books } from "@/data/data";
import { Books, type Book } from "./HomePage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

// interface Details {
// 	name: string;
// 	CoverImage: string;
// }

const BooksPage = () => {
	const [title, setTitle] = useState("shatter me");
	const [Details, setDetails] = useState<Book>();
	const FetchData = async () => {
		await axios.get(`/v1/api/google/${title}`).then((res) => {
			setDetails(res.data);
			console.log(res.data);
		});
	};

	const { error } = useQuery({
		queryKey: ["Books-Data", title],
		queryFn: FetchData,
	});
	// if (error) return <span>Error</span>;
	// NOTE : Change this if you would like
	// if (isLoading) {
	// 	return (
	// 		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8  place-items-center">
	// 			{books.map((_, index) => (
	// 				<Skeleton key={index} className="h-[220px] w-[150px]" />
	// 			))}
	// 			{/*<Skeleton className="h-[220px] w-[150px]" />
	// 			<Skeleton className="h-[220px] w-[150px]" />*/}
	// 		</div>
	// 		// <div className="flex flex-col space-y-3">
	// 		// 	<Skeleton className="h-[220px] w-[160px] rounded-xl" />
	// 		// 	<div className="space-y-2">
	// 		// 		<Skeleton className="h-4 w-[250px]" />
	// 		// 		<Skeleton className="h-4 w-[200px]" />
	// 		// 	</div>
	// 		// </div>
	// 	);
	// }

	return (
		// <Skeleton>
		<div>
			{/*<img src={Details?.image} />*/}
			<div>
				<Books books={Details ? [Details, ...books] : books} Limiter={false} />
			</div>
		</div>
	);
};

export default BooksPage;
