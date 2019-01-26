import React from "react";
import { RouteComponentProps } from "@reach/router";

type Props = RouteComponentProps & {
  id?: number;
};

const FeedItemsListPage = ({ id }: Props) => {
  return <h2>{id}</h2>;
};

export default FeedItemsListPage;
