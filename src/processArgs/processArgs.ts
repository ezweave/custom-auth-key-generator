import { get, map, overEvery, reduce } from 'lodash';

import { getEnv } from '../env';
import { Args, ArgTypes } from '../parseArgs';
import { readConfigFile } from '../readConfigFile';


export interface CompleteArgs {
    headerPrefix: string,
    path: string,
    privateKey: string,
    publicKey: string,
}

export interface ProcessArgs {
    (args: Args): CompleteArgs 
}

const isFieldPresent = (
    fieldName: string
) => (
    args: Args
) => !!get(args, fieldName);

const areAllFieldsPresent = (
    fieldNames: Array<string>
) => overEvery(
    map(fieldNames, isFieldPresent)
);

/**
 * These are all the arguments required to build a key
 */
const completeArgs = [
    ArgTypes.path,
    ArgTypes.privateKey,
    ArgTypes.publicKey,
    ArgTypes.headerPrefix,
];

export const isFromArgs = areAllFieldsPresent([
    ArgTypes.privateKey,
    ArgTypes.publicKey,
    ArgTypes.headerPrefix,
]);

export const isFromConfigFile = areAllFieldsPresent([ArgTypes.configFile]); 

export const isPathPresent = areAllFieldsPresent([ArgTypes.path]);

export const areArgsComplete = areAllFieldsPresent(completeArgs);

const argCheck = (args: Args) => (missingArgs: Array<string>, argName: string): Array<string> => {
    const foundValue = get(args, argName);
    return foundValue === undefined || foundValue === 'undefined' ? [
        ...missingArgs,
        `Missing value for required argument, ${argName}`, 
    ] : missingArgs;
};

export const buildErrorArrayForMissingArgs = (args: Args): Array<string> => reduce(
        completeArgs,
        argCheck(args),
        []
    );

export const throwErrorIfArgsAreCompleteOtherwiseReturnArgs = (args: Args): CompleteArgs => {
    if(areArgsComplete(args)) {
        return args as CompleteArgs;
    } else {
        const errors = buildErrorArrayForMissingArgs(args);
        throw Error(`Missing arguments: \n\t ${errors.join('\n\t')}`);
    }
};


export const processArgs: ProcessArgs = (
    args
) => {
    /**
     * 1. path must be supplied.  If this is coming from the command line, it is enforced by yargs
     * 2. Is this from a config file?  Load the args from the config file
     * 3. If not, load the environment.
     * 4. Check that all args are present.
     * 5. Return complete args
     */
    if(isFromConfigFile(args)) {
        const config = readConfigFile(args.configFile as string);
        const argsWithConfigFromFile = {
            ...config,
            path: args.path,
        };
        return throwErrorIfArgsAreCompleteOtherwiseReturnArgs(argsWithConfigFromFile);
    }
    if(isFromArgs(args)) {
        return throwErrorIfArgsAreCompleteOtherwiseReturnArgs(args);
    } else {
        const env = getEnv();
        const argsWithEnv = {
            ...env,
            path: args.path,
        };
        return throwErrorIfArgsAreCompleteOtherwiseReturnArgs(argsWithEnv);
    }
};
