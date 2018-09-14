import { IAction } from "@app/types/redux";
import React from "react";

interface IAppConfigEndpoints {
    rest?: string;
    graphQL?: string;
    webSocket?: string;
}

interface IAppConfigEnviroments {
    dev: IAppConfigEndpoints;
    prod: IAppConfigEndpoints;
    stag: IAppConfigEndpoints;
}

export interface IAppConfig {
    isProduction: boolean;
    enviroments: IAppConfigEnviroments;
    getReducers: () => {[key: string]: (state: any, action: IAction<any>) => any};
    composeMiddlewares: () => any;
    logo: React.ReactNode;
    themeOptions: any;
}
