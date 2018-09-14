import { IAction } from "@app/types";
import ActionTypes from "@redux/actions.types";

export function Increment(): IAction<any> {
    return {
        type: ActionTypes.INCREMENT,
    };
}

export function Decrement(): IAction<any> {
    return {
        type: ActionTypes.DECREMENT,
    };
}
