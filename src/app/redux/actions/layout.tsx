import { IAction } from "@app/types";
import ActionTypes from "@redux/actions.types";

export function OpenDrawer(): IAction<any> {
    return {
        type: ActionTypes.DRAWER_OPEN,
    };
}

export function CloseDrawer(): IAction<any> {
    return {
        type: ActionTypes.DRAWER_CLOSE,
    };
}
