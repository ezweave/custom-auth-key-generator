import CryotpJS from 'crypto-js';

import { CompleteArgs } from '../processArgs';

export interface CreateHash {
    (privateKey: string): (path: string) => string
}

export const createHash: CreateHash = (privateKey) => (path) => CryotpJS.enc.Base64.stringify(
    CryotpJS.HmacSHA512(path, privateKey)
);

export interface FormatHash {
    (publicKey: string, headerPrefix: string): (hash: string) => string
}

export const formatHash: FormatHash = (
    publicKey,
    headerPrefix
) => (
    hash
) => `${headerPrefix} ${publicKey}:${hash}`;

export const generateAuthKey = ({
    headerPrefix,
    path,
    privateKey,
    publicKey,
}:CompleteArgs): string => {
    const hash = createHash(privateKey)(path);
    return formatHash(publicKey, headerPrefix)(hash);
};
