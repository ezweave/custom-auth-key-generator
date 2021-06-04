import { Env } from '../env';
export interface CreateHash {
    (privateKey: string): (path: string) => string;
}
export declare const createHash: CreateHash;
export interface FormatHash {
    (publicKey: string, headerPrefix: string): (hash: string) => string;
}
export declare const formatHash: FormatHash;
export declare const generateAuthKey: (path: string, { privateKey, publicKey, headerPrefix, }?: Env) => string;
