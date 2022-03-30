import express from 'express'


// Using a sincleton for Router
export class AppRouter
{
    private static instance: express.Router

    static getInstance (): express.Router {
        if (!AppRouter.instance) {
            AppRouter.instance = express.Router();
        }

        return AppRouter.instance;
    }
}