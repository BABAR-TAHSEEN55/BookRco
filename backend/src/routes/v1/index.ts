import express, { Router } from "express";
import { Book } from "../Books.ts";
import { User } from "../auth.ts";

export const v1: Router = Router();

v1.use("/api", Book);
v1.use("/auth", User);
