import { withState } from "@app/lib";
import { Layout } from "antd";
import React from "react";

const { Footer } = Layout;

export default withState()(({ state, dispatch }) => (
    <Footer style={{ textAlign: "center" }}>
        ©2018 Reactive Crystal
    </Footer>
));
