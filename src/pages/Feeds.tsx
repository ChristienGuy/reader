import React from "react";
import { RouteComponentProps } from "@reach/router";


type Props = RouteComponentProps & {
  children: JSX.Element | JSX.Element[],
};

const FeedListPage = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default FeedListPage;
