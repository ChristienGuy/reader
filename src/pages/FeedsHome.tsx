import React, { useContext } from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { FeedType } from "../types";
import { FeedContext } from "../FeedContext";

const FeedList = ({ feeds }: { feeds: FeedType[] }) => {
  return (
    <ul>
      {feeds.map(feed => (
        <li key={feed.id}>
          <Link to={`${feed.id}`}>{feed.title}</Link>
        </li>
      ))}
    </ul>
  );
};

const FeedsHome = ({  }: RouteComponentProps) => {
  const { feeds } = useContext(FeedContext);
  return (
    <div>
      <h1>FeedsHome</h1>
      <p>Try: https://overreacted.io/rss.xml</p>
      <FeedList feeds={feeds} />
    </div>
  );
};

export default FeedsHome;
