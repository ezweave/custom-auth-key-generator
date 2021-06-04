"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const exampleOptions = {
    alias: 't',
};
console.warn('HEY THIS SHOULD BE RUNNING');
yargs_1.default.command('something', 'Do something', (argv) => {
    argv.options('test', exampleOptions);
}, (args) => {
    console.warn('ARGS', args);
}).argv;
//# sourceMappingURL=index.js.map