"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateAuthKey_1 = require("./generateAuthKey");
describe('generateAuthKey', () => {
    it('generates a hash key', () => {
        const key = generateAuthKey_1.generateAuthKey('/v2/applications/AP21013204737/assets/52695/filecontents');
        expect(key).toMatchSnapshot();
    });
});
//# sourceMappingURL=generateAuthKey.spec.js.map