import { IAction } from "@app/types";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ConfigProps } from "redux-form";

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

export interface IRouteProps extends RouteComponentProps<any> {}
export interface IFormProps<T> extends ConfigProps<T> {}

export interface IRouterConfigEntry {
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    render?: ((props: RouteComponentProps<any>) => React.ReactNode);
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;
}

export interface IRouterConfig {
    [path: string]: IRouterConfigEntry;
}

export interface IModuleRouterConfig {
    prepend: string | null | false | undefined;
    routes: {
        [path: string]: IRouterConfigEntry;
    };
}

export interface IMenuConfig {
    itens: IMenuConfigEntry[];
    breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    theme: "light" | "dark";
    mode?: "inline" | "horizontal" | "vertical" | "vertical-left" | "vertical-right";
}

export interface IMenuConfigEntry {
    type: "EXTERNAL_URL" | "ROUTER_PATH" | "SUBMENU";
    path?: string;
    title: string | React.ReactNode;
    icon: React.ReactNode;
    target?: string | "_blank";
    match?: string[];
    childrens?: IMenuConfigEntry[];
    uid?: string;
}

export interface IProfileMenu {
    icon?: React.ReactNode;
    text?: React.ReactNode;
    itens: IProfileMenuEntry[];
}
export interface IProfileMenuEntry {
    type: "CLICK" | "URL" | "ROUTE" | "DIVIDER";
    label?: React.ReactNode;
    icon?: React.ReactNode;
    path?: any;
    onClick?: (dispatch: Dispatch) => void;
    target?: string;
}

export type Dispatch = (action: IAction<any>) => void;

export type FNGetHeader = (dispatch: Dispatch) => IProfileMenu[];
