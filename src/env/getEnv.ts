import { Config, parseConfig } from '../config';

export type Env = Config;

export const getEnv = (required = true): Env => parseConfig(process.env, required);
