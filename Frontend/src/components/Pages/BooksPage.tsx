import { books } from "@/data/data";
import { Books } from "./HomePage";

const BooksPage = () => {
	return (
		<div className="">
			<div>
				<Books books={books} Limiter={false} />
			</div>
		</div>
	);
};

export default BooksPage;
