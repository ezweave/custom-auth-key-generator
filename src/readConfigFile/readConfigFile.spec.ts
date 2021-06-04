import { readConfigFile } from './readConfigFile';

describe('readConfigFile', () => {
    it('reads a valid config file and parses what is there', () => {
        expect(
            readConfigFile('./test/example.yml')
        ).toMatchSnapshot();
    });
    it('throws errors if values are missing', () => {
        expect(
            () => readConfigFile('./test/bad_example.yml')
        ).toThrowErrorMatchingSnapshot();
    });
    it('throws errors if the file isnt yaml', () => {
        expect(
            () => readConfigFile('./test/.example.env')
        ).toThrowErrorMatchingSnapshot();
    });
});
