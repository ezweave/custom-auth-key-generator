import { getEnv } from './getEnv';

describe('getEnv', () => {
    it('gets the environment variables', () => {
        expect(getEnv()).toMatchSnapshot();
    });

    it('throws errors if required env fields are not present', () => {
        process.env.PUBLIC_KEY = undefined;
        process.env.PRIVATE_KEY = undefined;
        expect(() => getEnv()).toThrowErrorMatchingSnapshot();
    });

    it('doesnt throw errors if required is turned off', () => {
        process.env.PUBLIC_KEY = undefined;
        process.env.PRIVATE_KEY = undefined;
        expect(getEnv(false)).toMatchSnapshot();
    });
});
