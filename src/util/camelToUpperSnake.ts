import { flow, snakeCase, toUpper } from 'lodash';

export interface CamelToUpperSnake {
    (name: string): string
}

export const camelToUpperSnake: CamelToUpperSnake = flow(
    snakeCase,
    toUpper
);
