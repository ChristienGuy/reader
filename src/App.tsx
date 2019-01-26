import React, { useEffect, useState } from "react";
import Feeds from "./pages/Feeds";
import FeedsHome from "./pages/FeedsHome";
import Feed from "./pages/Feed";
import FeedHome from "./pages/FeedHome";
import { Router } from "@reach/router";
import { FeedType } from "./types";
import { Output } from "rss-parser";
import { hashCode } from "./utils";

const parseRss = async (rssUrl: string): Promise<Output> => {
  const rssObj: Output = await fetch(
    `/.netlify/functions/hello?rssUrl=${rssUrl}`
    ).then(res => res.json());
  return rssObj;
};

const loadFeeds = (): FeedType[] => {
  const feeds = localStorage.getItem("feeds");
  if (feeds !== null) {
    return JSON.parse(feeds);
  }
  return [];
};

const storeFeeds = (feeds: FeedType[]) => {
  localStorage.setItem("feeds", JSON.stringify(feeds));
};


const App = () => {
  const [feeds, setFeeds] = useState<FeedType[]>([]);

  const addFeed = (url: string) => {
    parseRss(url).then(feed => {

      const newFeed = {
        id: hashCode("hello"),
        ...feed
      };

      setFeeds([...feeds, newFeed]);
      storeFeeds(feeds);
    });
  };

  useEffect(() => {
    const feeds = loadFeeds();
    setFeeds(feeds);
    addFeed("https://overreacted.io/rss.xml");
  }, []);

  return (
    <Router>
      <Feeds path="feeds">
        <FeedsHome feeds={feeds} path="/" />
        <Feed path=":id">
          <FeedHome feeds={feeds} path="/" />
        </Feed>
      </Feeds>
    </Router>
  );
};
export default App;
