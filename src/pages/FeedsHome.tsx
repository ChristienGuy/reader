import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { FeedType } from "../types";

const FeedList = ({ feeds }: { feeds: FeedType[] }) => {
  return (
    <ul>
      {feeds.map(feed => (
        <li>
          <Link to={`${feed.id}`}>{feed.title}</Link>
        </li>
      ))}
    </ul>
  );
};

type Props = RouteComponentProps & {
  feeds: FeedType[],
};

const FeedsHome = ({ feeds }: Props) => {
  return (
    <div>
      <h1>FeedsHome</h1>
      <FeedList feeds={feeds} />
    </div>
  );
};

export default FeedsHome;
