export interface Env {
    privateKey: string;
    publicKey: string;
    headerPrefix: string;
}
export declare const getEnv: () => Env;
