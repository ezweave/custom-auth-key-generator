#!/usr/bin/env node

import dotenv from 'dotenv';
import { flow } from 'lodash';
import path from 'path';
import yargs from 'yargs';

import { generateAuthKey } from './generateAuthKey';
import { Args, ArgTypes, parseArgs } from './parseArgs';
import { processArgs } from './processArgs';

export interface BuildKey {
    (args: Args): string
}

export const buildKey: BuildKey = flow(
    processArgs,
    generateAuthKey
);

if (require.main === module) {
    // If you use a local .env file, this will make sure it is configured
    dotenv.config({ path: path.resolve(__dirname, '../.env') });
    const args = parseArgs(
        yargs.options({
            [ArgTypes.path]: { type: 'string', demandOption: true, alias: 'p' },
            [ArgTypes.headerPrefix]: { type: 'string', demandOption: false, alias: 'pre' },
            [ArgTypes.publicKey]: { type: 'string', demandOption: false, alias: 'puk' },
            [ArgTypes.privateKey]: { type: 'string', demandOption: false, alias: 'prk' },
            [ArgTypes.configFile]: { type: 'string', demandOption: false, alias: 'c' },
        }).argv);
    console.log(buildKey(args));
}
