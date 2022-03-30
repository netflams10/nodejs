import 'reflect-metadata'

import { MetatdataKey } from './MetadataKeys'

export function bodyValidator (...keys: string[])
{
    return function (target: any, key: string, desc: PropertyDescriptor) 
    {
        Reflect.defineMetadata(MetatdataKey.validator, keys, target, key);
    }
}