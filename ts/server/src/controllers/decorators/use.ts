import 'reflect-metadata'
import { RequestHandler } from 'express'
import { MetatdataKey } from './MetadataKeys'

export function use (middleware: RequestHandler)
{
    return function (target: any, key: string, desc: PropertyDescriptor) 
    {
        const middlewares = Reflect.getMetadata(MetatdataKey.middleware, target, key) || [];

        // middlewares.push(middleware);

        // Reflect.defineMetadata(MetatdataKey.middleware, middlewares, target, key);
        Reflect.defineMetadata(MetatdataKey.middleware, [...middlewares, middleware], target, key);
    }
}