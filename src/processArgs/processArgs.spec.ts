import { Args } from '../parseArgs';
import { areArgsComplete, buildErrorArrayForMissingArgs, isFromArgs, isFromConfigFile, isPathPresent, processArgs, throwErrorIfArgsAreCompleteOtherwiseReturnArgs } from './processArgs';

const completeArgs = {
   headerPrefix: 'prefix',
   path: '/foo',
   privateKey: 'private',
   publicKey: 'public',
};

const partialArgs = {
    path: '/foo',
    privateKey: 'private', 
};

const badArgsNoTypeChecks = {} as unknown as Args;

describe('processArgs', () => {
   describe('isFromArgs', () => {
       it('returns true if all required args are present', () => {
           expect(
               isFromArgs(completeArgs)
           ).toEqual(true);
       });
       it('returns false if args are missing', () => {
           expect(
               isFromArgs({
                   privateKey: 'private',
                   path: '/foo',
               })
           ).toEqual(false);
       });
   });
   describe('isFromConfigFile', () => {
       it('returns true if a config file is specified', () => {
           expect(
               isFromConfigFile({
                   configFile: 'file.yaml',
                   path: '/foo',
               })
           ).toEqual(true);
       });
       it('returns false if no config file is specified', () => {
           expect(
               isFromConfigFile({
                   path: '/foo',
               })
           ).toEqual(false);
       });
   });
   describe('isPathPresent', () => {
       it('returns true if a config file is specified', () => {
           expect(
               isPathPresent({
                   configFile: 'file.yaml',
                   path: '/foo',
               })
           ).toEqual(true);
       });
       it('returns false if no config file is specified', () => {
           expect(
            isPathPresent(badArgsNoTypeChecks)
           ).toEqual(false);
       });
   });
   describe('areArgsComplete', () => {
       it('returns true if args are complete', () => {
           expect(
               areArgsComplete(completeArgs)
           ).toEqual(true);
       });
       it('returns false if args are incomplete', () => {
           expect(
             areArgsComplete(badArgsNoTypeChecks)
           ).toEqual(false);
       });
   });
   describe('buildErrorArrayForMissingArgs', () => {
        it('is empty if all args are present', () => {
            expect(
                buildErrorArrayForMissingArgs(completeArgs)
            ).toEqual([]);
        });
        it('returns an array of missing arg errors', () => {
            expect(
                buildErrorArrayForMissingArgs(partialArgs)
            ).toMatchSnapshot();
        });
   });
   describe('throwErrorIfArgsAreCompleteOtherwiseReturnArgs', () => {
       it('returns true if all args are present', () => {
           expect(
               throwErrorIfArgsAreCompleteOtherwiseReturnArgs(completeArgs)
           ).toMatchSnapshot();
       });
       it('throws an error if anything is missing', () => {
           expect(
            () => throwErrorIfArgsAreCompleteOtherwiseReturnArgs(badArgsNoTypeChecks)
           ).toThrowErrorMatchingSnapshot();
       });
   });

   it('throws an error if no path is present', () => {
     expect(
         () => processArgs(badArgsNoTypeChecks)
     ).toThrowErrorMatchingSnapshot();
   });
});
