import { Router, type Request, type Response } from "express";
import {
    CreateBook,
    DeleteBookById,
    GetBookById,
    GetBooks,
} from "../services/Books.service.ts";
import type { BookSchema } from "../schema/book.schema.ts";
import axios from "axios";
import dotenv from "dotenv";
import type { FetchedBooksProps } from "../utils/helper.ts";

dotenv.config();

export const Book: Router = Router();
type FBooks = {
    id: number;
    name: string;
};
//Fake Db
// const FakeBooks: FBooks[] = [
//     { id: 1, name: "Ikigai" },
//     { id: 2, name: "LOTM" },
//     { id: 3, name: "You can't Hurt Me" },
//     { id: 4, name: "Atomic Habits" },
//     { id: 5, name: "The 7 Habits of Highly Effective People" },
//     { id: 6, name: "Rich Dad Poor Dad" },
// ];
//

Book.get("/books", async (_req: Request, res: Response) => {
    console.log("Is hits hit");
    const AllBooks = await GetBooks();
    res.json({ AllBooks });
})
    .post(
        "/books",
        async (req: Request<{}, {}, BookSchema["body"]>, res: Response) => {
            const newBook = req.body;
            console.log(newBook);
            await CreateBook(newBook);
            res.status(200).json({
                msg: "Book Created successfully",
                book: newBook,
            });
        },
    )
    .get("/books/unique/:title", async (req: Request, res: Response) => {
        const { title } = req.params;
        try {
            const { data } = await axios.get(
                `https://openlibrary.org/search.json?title=${title}&limit=1`,
            );
            const book = data.docs[0];
            const olid = book.cover_edition_key || book.cover_edition_key?.[0];
            const CoverUrl = olid
                ? `https://covers.openlibrary.org/b/olid/${olid}-M.jpg`
                : null;
            res.status(200).json(data); // return clean JSON
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Failed to fetch book data" });
        }
    })
    .get("/google/:title", async (req: Request, res: Response) => {
        const { title } = req.params;
        const { data } = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&maxResults=1&langRestrict=en&fields=items(volumeInfo/title,volumeInfo/description,volumeInfo/imageLinks,volumeInfo/authors)&key=${process.env.GOOGLE_API_KEY}`,
        );

        // Chagne the format ad put this in the object
        const name = data.items[0].volumeInfo.title;
        const description = data.items[0].volumeInfo.description;
        const authors = data.items[0].volumeInfo.authors[0];
        const image = data.items[0].volumeInfo.imageLinks.thumbnail;
        // const categories = data.items[0].volumeInfo.categories[0];
        // const averageRating = data.items[0].volumeInfo.averageRating;
        // console.log(data.items[0].volumeInfo);
        // console.log(data.items[0].volumeInfo.iimageLinks);
        const Details = {
            name,
            description,
            authors,
            image,
        };
        res.status(200).json(Details);
    })
    .get("/google/genre/:genre", async (req: Request, res: Response) => {
        const { genre } = req.params;
        const { data } = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}`,
        );
        const TransformedBooks = (book: any): FetchedBooksProps => {
            const info = book.volumeInfo;
            return {
                title: info.title,
                authors: info.authors,
                description: info.description,
                categories: info.categories,
                imageLinks: {
                    thumbnail: info.imageLinks?.thumbnail,
                },
            };
        };
        const DetailsBooks = data.items.map(TransformedBooks);
        // console.log(DetailsBooks);
        res.status(200).json(DetailsBooks);
    })
    .get("/google/author/:author", async (req: Request, res: Response) => {
        const { author } = req.params;
        const { data } = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`,
        );
        const TransformedBooks = (book: any): FetchedBooksProps => {
            const info = book.volumeInfo;
            return {
                title: info.title,
                authors: info.authors,
                description: info.description,
                categories: info.categories,
                imageLinks: {
                    thumbnail: info.imageLinks?.thumbnail,
                },
            };
        };
        const DetailsBooks = data.items.map(TransformedBooks);
        res.status(200).json(DetailsBooks);
    })
    .get("/books/:id", async (req: Request<{ id: string }>, res: Response) => {
        const { id } = req.params;
        const BookId = parseInt(id);
        if (!BookId) {
            return res.status(404).json({ Msg: "ID is required" });
        }
        try {
            // const Book = FakeBooks.find((expense) => expense.id == BookId);
            const Book = await GetBookById(BookId);
            if (!Book) {
                return res.json({ Msg: "Book Not Found" });
            }
            res.json({ Book });
        } catch (err) {
            res.status(404).json({ err });
        }
    })
    .delete(
        "/book/:id",
        async (req: Request<{ id: string }>, res: Response) => {
            try {
                const BookId = parseInt(req.params.id);
                if (!BookId) {
                    return res.status(404).json({ Msg: "ID is required" });
                }
                // const DeleteId = FakeBooks.find((b) => b.id == BookId);
                const DeleteId = await DeleteBookById(BookId);
                res.status(200).json({
                    msg: "Book Deleted successfully",
                    DeleteBook: DeleteId,
                });
            } catch (err) {
                res.json({ err });
            }
        },
    );
