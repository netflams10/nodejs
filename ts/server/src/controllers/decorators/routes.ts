import 'reflect-metadata';
import {Methods} from './Methods'
import { MetatdataKey } from './MetadataKeys';

// export function get (path: string) {

function routeBinder (method: string) {
    return function (path: string) {
        return function (target: any, key:string, desc: PropertyDescriptor) {
            Reflect.defineMetadata(MetatdataKey.path, path, target, key);
            Reflect.defineMetadata(MetatdataKey.method, method, target, key);
        }
    }
}


// ENUm does a cool job of avoiding typo
export const get = routeBinder(Methods.get)
export const post = routeBinder(Methods.post)
export const put = routeBinder(Methods.put)
export const patch = routeBinder(Methods.patch)
export const del = routeBinder(Methods.get)