import { RequestHandler } from "express";

// export type callback = async function (req: Request, res: Response):
export interface endpoint {
    type: 'POST' | 'GET';
    endpointUrl: string;
    endpointFunction: RequestHandler;
}

export namespace AppInterfaces {
    export interface LoginUserInput {
        email: string
        password: string
    }
    export interface LoginUserOutput {
        email: string
        token: string
    }

    export interface User {
        email: string
    }
}
