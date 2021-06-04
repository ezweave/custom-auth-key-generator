import { get } from 'lodash';

export enum ArgTypes {
    configFile = 'configFile',
    headerPrefix = 'headerPrefix',
    path = 'path',
    privateKey = 'privateKey',
    publicKey = 'publicKey',
}

export interface Args {
    configFile?: string
    headerPrefix?: string,
    path: string,
    privateKey?: string,
    publicKey?: string,
}

export interface ParseArgs {
// eslint-disable-next-line @typescript-eslint/no-explicit-any 
    (args: any): Args
}

export const parseArgs: ParseArgs = (
  args 
) => ({
    configFile: get(args, ArgTypes.configFile),
    headerPrefix: get(args, ArgTypes.headerPrefix),
    path: get(args, ArgTypes.path),
    privateKey: get(args, ArgTypes.privateKey),
    publicKey: get(args, ArgTypes.publicKey),
});
