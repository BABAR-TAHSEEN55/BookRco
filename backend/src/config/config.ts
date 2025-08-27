import dotenv from "dotenv";
dotenv.config();
export const config = {
    port: parseInt(process.env.PORT || "4000"),
    NODE_ENV: process.env.NODE_ENV || "development",
};
