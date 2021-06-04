import { parseArgs } from './parseArgs';

describe('parseArgs', () => {
    it('parses avaialable args', () => {
        const args = {
            configFile: 'something.yml',
            headerPrefix: 'something',
            path: 'foo/foo/bar',
            privateKey: 'adfadsfasdfasdf',
            publicKey: 'jljjjjjjj',
        };
        expect(
            parseArgs(args)
        ).toMatchSnapshot();
    });
});
