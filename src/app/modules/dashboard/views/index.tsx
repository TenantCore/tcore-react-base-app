import { withRouter, withState } from "@app/lib";
import { IFormProps, IRouteProps } from "@app/types";
import * as React from "react";
import "./index.scss";

@withState()
@withRouter()
export default class extends React.PureComponent<any & IRouteProps & IFormProps<any>, {}> {
  public render() {
    const { dispatch, state } = this.props;
    return (
      <div className="app-container-flex">
        Dashboard content
      </div>
    );
  }
}
