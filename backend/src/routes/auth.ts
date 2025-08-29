import { Router, type Request, type Response } from "express";
import { kindeClient, sessionManager } from "../utils/kind.ts";

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
User.get("/me", async (req: Request, res: Response) => {
    const isAuthenticated = await kindeClient.isAuthenticated(sessionManager); // Boolean: true or false
    res.json({ isAuthenticated });
    if (!isAuthenticated) {
        // Need to implement, e.g: call an api, etc...
        return res.status(404).json({ error: "Unauthorized" });
    } else {
        const user = await kindeClient.getUserProfile(sessionManager);
        res.status(200).json({ user });
        // Need to implement, e.g: redirect user to sign in, etc..
    }
});
