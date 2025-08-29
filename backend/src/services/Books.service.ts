import prisma from "../config/prisma.ts";
type input = {
    author: string;
    description: string;
    title: string;
    coverImage?: string;
};

export const CreateBook = async (input: input) => {
    return await prisma.books.create({
        data: input,
    });
};
export const GetBooks = async () => {
    //Retreives all the books in the DB
    //IF you don't return query wont return anything duh!
    return await prisma.books.findMany();
};
export const GetBookById = async (id: number) => {
    return await prisma.books.findFirstOrThrow({
        where: {
            id: id,
        },
    });
};

export const DeleteBookById = async (id: number) => {
    return await prisma.books.delete({
        where: {
            id: id,
        },
    });
};
