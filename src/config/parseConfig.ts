import { get, isEmpty, reduce } from 'lodash';

import { ArgTypes } from '../parseArgs';
import { camelToUpperSnake } from '../util';

export interface Config {
    headerPrefix: string,
    privateKey: string,
    publicKey: string,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any 
const checkErrors = (errors: Array<string>, value: any, key: string): Array<string> =>
    (value === undefined || value === 'undefined') ? [
        ...errors,
        `Missing value for required field '${key}'/'${camelToUpperSnake(key)}'`, 
    ] : errors;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any 
export const parseConfig = (source: any, required = true): Config => {
    const config = {
        headerPrefix: get(source, camelToUpperSnake(ArgTypes.headerPrefix)),
        privateKey: get(source, camelToUpperSnake(ArgTypes.privateKey)),
        publicKey: get(source, camelToUpperSnake(ArgTypes.publicKey)),
    };

    const errors = reduce(
        config, checkErrors, []
    );

    if(!required || isEmpty(errors)) {
        return config;
    } else {
        throw new Error(errors.join('\n'));
    }
};

