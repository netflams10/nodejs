import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { NextFunction, Response, Request } from 'express';
import {Methods} from './Methods';
import { MetatdataKey } from './MetadataKeys';
// import express from 'express';

// export const router = express.Router();

function bodyValidator (keys: string)
{
    return function (req: Request, res: Response, next: NextFunction) {
        if (!req.body) {
            res.status(422).send("Invalid request");
            return;
        }

        for (let key of keys) {
            if (!req.body[key]) {
                res.status(422).send("Invalid Request");
                return;
            }
        }

        next()
    }
}

export function controller (routePrefix: string)
{
    // target: Function is our constructor Function
    return function (target: Function) 
    {
        const router = AppRouter.getInstance();

        for (let key in target.prototype)
        {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(MetatdataKey.path, target.prototype, key);
            const method: Methods = Reflect.getMetadata(MetatdataKey.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetatdataKey.middleware, target.prototype, key) || [];

            const requireBodyProps = Reflect.getMetadata(MetatdataKey.validator, target.prototype, key) || [];

            const validator = bodyValidator(requireBodyProps);

            if (path) {
                // router.get(`${routePrefix}${path}`, routeHandler);
                router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
            }
        }
    }
}