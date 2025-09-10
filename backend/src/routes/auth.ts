import { Router, type Request, type Response } from "express";
import { getUser, kindeClient, sessionManager } from "../utils/kind.ts";

export const User: Router = Router();
User.get("/login", async (req: Request, res: Response) => {
    const loginUrl = await kindeClient.login(sessionManager);
    return res.redirect(loginUrl.toString());
});

User.get("/register", async (req: Request, res: Response) => {
    const registerUrl = await kindeClient.register(sessionManager);
    return res.redirect(registerUrl.toString());
});
User.get("/callback", async (req: Request, res: Response) => {
    const url = new URL(`${req.protocol}://${req.get("host")}${req.url}`);
    await kindeClient.handleRedirectToApp(sessionManager, url);
    return res.redirect("/");
});
User.get("/logout", async (req: Request, res: Response) => {
    const logoutUrl = await kindeClient.logout(sessionManager);
    return res.redirect(logoutUrl.toString());
});
User.get("/me",getUser, async (req: Request, res: Response) => {
    const isAuthenticated = await kindeClient.isAuthenticated(sessionManager); // Boolean: true or false
   const user = req.user
    console.log(req.user)
        res.status(200).json({ user ,isAuthenticated});

});
