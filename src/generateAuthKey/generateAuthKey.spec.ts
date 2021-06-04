import { getEnv } from '../env';
import { generateAuthKey } from './generateAuthKey';

describe('generateAuthKey', () => {
    it('generates a hash key', () => {
        const key = generateAuthKey({
            ...getEnv(),
            path: '/v2/applications/AP21013204737/assets/52695/filecontents',
        });
        expect(key).toMatchSnapshot();
    });
});
