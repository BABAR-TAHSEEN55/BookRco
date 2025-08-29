import { z, type TypeOf } from "zod";

export const BookCreateSchema = z.object({
    body: z.object({
        author: z.string({}).min(1, "AuthorName is Required"),
        description: z
            .string()
            .min(20, "Description should be atleast 20 words"),
        title: z.string({}).min(1, "Title is required"),
        coverImage: z.string({}),
        // coverImage: z.string({}), // Make this optional and in prisma change coverImage string? to this and migrate and check if the error persists in other branch
    }),
});

export type BookSchema = TypeOf<typeof BookCreateSchema>;
