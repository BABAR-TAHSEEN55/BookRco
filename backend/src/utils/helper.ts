export interface FetchedBooksProps {
    title: string;
    authors: string[];
    description: string;
    categories: string[];
    imageLinks?: {
        thumbnail?: string;
    };
}
