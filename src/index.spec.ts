import { buildKey } from '.';

describe('buildKey', () => {
    it('builds a key', () => {
        expect(
            buildKey({
                path: 'foo/bar',
            })
        ).toMatchSnapshot();
    });
});
