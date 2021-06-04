import { readFileSync } from 'fs';
import yaml from 'js-yaml';
import { flow, partialRight } from 'lodash';

import { Config, parseConfig } from '../config';

export interface ReadConfigFile {
    (pathToConfigFile: string): Config 
}

export const readConfigFile: ReadConfigFile = flow(
    partialRight(
        readFileSync,
        'utf8'
    ),
    yaml.load,
    parseConfig
);
