import React from "react";

import { RouteComponentProps } from "@reach/router";

type Props = RouteComponentProps & {
  children: JSX.Element[] | JSX.Element;
};

const FeedPage = ({ children }: Props) => (
  <div>
    <h1>Feed</h1>
    {children}
  </div>
);

export default FeedPage;
