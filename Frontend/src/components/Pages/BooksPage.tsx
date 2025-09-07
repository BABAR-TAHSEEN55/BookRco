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
	const [title, setTitle] = useState("Batman");
	const [Details, setDetails] = useState<Book>();
	const FetchData = async () => {
		await axios.get(`/v1/api/google/${title}`).then((res) => {
			setDetails(res.data);
			console.log(res.data);
		});
	};

	const { isPending, isLoading, error } = useQuery({
		queryKey: ["Books-Data"],
		queryFn: FetchData,
	});
	// if (error) return <span>Error</span>;
	if (isLoading) {
		return <span>Loading.....</span>;
	}

	return (
		<div className="">
			{/*<img src={Details?.image} />*/}
			<div>
				<Books books={Details ? [Details, ...books] : books} Limiter={false} />
			</div>
		</div>
	);
};

export default BooksPage;
