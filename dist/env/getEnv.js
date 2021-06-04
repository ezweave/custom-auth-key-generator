"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnv = void 0;
const lodash_1 = require("lodash");
const snakeToUpper = lodash_1.flow(lodash_1.snakeCase, lodash_1.toUpper);
const checkErrors = (errors, value, key) => (value === undefined || value === 'undefined') ? [
    ...errors,
    `Missing environment value for required field '${key}'/'${snakeToUpper(key)}'`,
] : errors;
const getEnv = () => {
    const env = {
        privateKey: process.env.PRIVATE_KEY,
        publicKey: process.env.PUBLIC_KEY,
        headerPrefix: process.env.HEADER_PREFIX,
    };
    const errors = lodash_1.reduce(env, checkErrors, []);
    if (lodash_1.isEmpty(errors)) {
        return env;
    }
    else {
        throw new Error(errors.join('\n'));
    }
};
exports.getEnv = getEnv;
//# sourceMappingURL=getEnv.js.map