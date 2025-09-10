import { type Response, type Request, type NextFunction } from "express";
import {
    createKindeServerClient,
    GrantType,
    type SessionManager,
    type UserType,
} from "@kinde-oss/kinde-typescript-sdk";

// Client for authorization code flow
export const kindeClient = createKindeServerClient(
    GrantType.AUTHORIZATION_CODE,
    {
        authDomain: process.env.KINDE_DOMAIN!,
        clientId: process.env.KINDE_CLIENT_ID!,
        clientSecret: process.env.KINDE_CLIENT_SECRET!,
        redirectURL: process.env.KINDE_REDIRECT_URI!,
        logoutRedirectURL: process.env.KINDE_LOGOUT_REDIRECT_URI!,
    },
);

//NOTE: Temporary storing it in js object IN MEMORY
let store: Record<string, unknown> = {};
export const sessionManager: SessionManager = {
    async getSessionItem(key: string) {
        return store[key];
    },
    async setSessionItem(key: string, value: unknown) {
        store[key] = value;
    },
    async removeSessionItem(key: string) {
        delete store[key];
    },
    async destroySession() {
        store = {};
    },
};

//Refactor this shi~
declare global {
    namespace Express {
        interface Request {
            user?: UserType;
        }
    }
}

export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const isAuthenticated = await kindeClient.isAuthenticated(sessionManager); // Boolean: true or false
    if (!isAuthenticated) {
        return res.status(404).json({ error: "Unauthorized", isAuthenticated });
    } else {
        const user: UserType = await kindeClient.getUserProfile(sessionManager);
        req.user = user;
        next();
    }
};
