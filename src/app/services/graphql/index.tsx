import appConfig from "@app/app.config";
import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
    uri: "appConfig.endPoints.graphQL",
});
