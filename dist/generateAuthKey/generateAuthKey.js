"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuthKey = exports.formatHash = exports.createHash = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const env_1 = require("../env");
const createHash = (privateKey) => (path) => crypto_js_1.default.enc.Base64.stringify(crypto_js_1.default.HmacSHA512(path, privateKey));
exports.createHash = createHash;
const formatHash = (publicKey, headerPrefix) => (hash) => `${headerPrefix} ${publicKey}:${hash}`;
exports.formatHash = formatHash;
const DEFAULT_ENV = env_1.getEnv();
const generateAuthKey = (path, { privateKey, publicKey, headerPrefix, } = DEFAULT_ENV) => {
    const hash = exports.createHash(privateKey)(path);
    return exports.formatHash(publicKey, headerPrefix)(hash);
};
exports.generateAuthKey = generateAuthKey;
//# sourceMappingURL=generateAuthKey.js.map