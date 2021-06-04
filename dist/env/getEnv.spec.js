"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getEnv_1 = require("./getEnv");
describe('getEnv', () => {
    it('gets the environment variables', () => {
        expect(getEnv_1.getEnv()).toMatchSnapshot();
    });
    it('throws errors if required env fields are not present', () => {
        process.env.PUBLIC_KEY = undefined;
        process.env.PRIVATE_KEY = undefined;
        expect(() => getEnv_1.getEnv()).toThrowErrorMatchingSnapshot();
    });
});
//# sourceMappingURL=getEnv.spec.js.map