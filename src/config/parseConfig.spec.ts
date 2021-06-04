import { parseConfig } from './parseConfig';

describe('parseConfig', () => {
    it('parses config values from any source', () => {
        const source = {
            PRIVATE_KEY: 'Private',
            PUBLIC_KEY: 'Public',
            HEADER_PREFIX: 'Prefix',
        };
        expect(
            parseConfig(source)
        ).toMatchSnapshot();
    });
    it('throws an error if a required field is missing', () => {
        const source = {
            PRIVATE_KEY: 'Private',
        };
        expect(
         () => parseConfig(source)
        ).toThrowErrorMatchingSnapshot();
    });
    it('doesnt throw errors if required is off', () => {
        const source = {
            PRIVATE_KEY: 'Private',
        };
        expect(
         parseConfig(source, false)
        ).toMatchSnapshot();
    });
});
