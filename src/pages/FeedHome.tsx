import React, { Fragment, useContext } from "react";
import { RouteComponentProps } from "@reach/router";
import { FeedType } from "../types";
import { Items } from "rss-parser";
import { FeedContext } from "../FeedContext";

type Props = RouteComponentProps & {
  id?: number;
};

const FeedHome = ({ id }: Props) => {
  const { feeds } = useContext(FeedContext);
  const feed = feeds.find(feed => {
    return feed.id === Number(id);
  });
  return feed ? <FeedItemList feed={feed} /> : <div>no feed with that id</div>;
};

const FeedItemList = ({ feed }: { feed: FeedType }) => {
  return (
    <ul>
      {feed && feed.items
        ? feed.items.map(item => (
            <li key={item.guid}>
              <FeedItem feedItem={item} />
            </li>
          ))
        : null}
    </ul>
  );
};

const FeedItem = ({ feedItem }: { feedItem: Items }) => {
  return (
    <Fragment>
      <h2>{feedItem.title}</h2>
      <p>{feedItem.contentSnippet}</p>
    </Fragment>
  );
};

export default FeedHome;
