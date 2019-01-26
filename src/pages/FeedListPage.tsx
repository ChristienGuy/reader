import React from "react";
import { Feed } from "../types";
import { RouteComponentProps } from "@reach/router";
import { useFeeds } from "../useFeeds";

const FeedList = ({ feeds }: { feeds: Feed[] }) => {
  return (
    <ul>
      {feeds.map(feed => (
        <li>
          {feed.title}
          <FeedItemList feed={feed} />
        </li>
      ))}
    </ul>
  );
};

const FeedItemList = ({ feed }: { feed: Feed }) => {
  return (
    <ul>
      {feed && feed.items
        ? feed.items.map(item => <li>{item.title}</li>)
        : null}
    </ul>
  );
};

type Props = RouteComponentProps;
const FeedListPage = (props: Props) => {
  const [feeds, addFeed] = useFeeds();
  return <FeedList feeds={feeds} />;
};

export default FeedListPage;
