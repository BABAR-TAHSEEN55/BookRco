import { Router, type Request, type Response } from "express";
import {
    CreateBook,
    DeleteBookById,
    GetBookById,
    GetBooks,
} from "../services/Books.service.ts";
import type { BookSchema } from "../schema/book.schema.ts";

export const Book: Router = Router();
type FBooks = {
    id: number;
    name: string;
};
//Fake Db
const FakeBooks: FBooks[] = [
    { id: 1, name: "Ikigai" },
    { id: 2, name: "LOTM" },
    { id: 3, name: "You can't Hurt Me" },
    { id: 4, name: "Atomic Habits" },
    { id: 5, name: "The 7 Habits of Highly Effective People" },
    { id: 6, name: "Rich Dad Poor Dad" },
];

Book.get("/books", async (_req: Request, res: Response) => {
    const AllBooks = await GetBooks();
    res.json({ AllBooks });

    // res.json({ Books: FakeBooks });
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
