import { camelToUpperSnake } from './camelToUpperSnake';

describe('camelToUpperSnake', () => {
    it('converts from camel to upper snake', () => {
        expect(
            camelToUpperSnake('fooBar')
        ).toEqual('FOO_BAR');
    });
});
