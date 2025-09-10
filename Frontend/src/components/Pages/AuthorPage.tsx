import BookListPage from "./BookListPage";

const AuthorPage = () => {
	return (
		<div>
			<BookListPage paramKey="author" endpoint="/v1/api/google/author" />
		</div>
	);
};

export default AuthorPage;
