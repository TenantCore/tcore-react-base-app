import React from "react";
import {connect} from "react-redux";
import { withRouter as oldWithRouter } from "react-router-dom";
import {ConfigProps, reduxForm as oldReduxForm} from "redux-form";

export function withRouter() {
    return <T extends React.ComponentType>(target: T): T => oldWithRouter<any>(target as any) as any;
}

export function withState(mapStateToProps?: (state: any, ownProps: any) => any) {
    return <T extends React.ComponentType<any>>(target: T): T => {
        const connector = connect(typeof mapStateToProps === "function" ? mapStateToProps : (state) => ({state}));
        return connector(target) as any;
    };
}

export function withForm(config: ConfigProps<any>) {
    return <T extends React.ComponentType>(target: T): T => {
        return oldReduxForm(config)(target as any) as any;
    };
}
