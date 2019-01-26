import { useState, useEffect } from "react";
import { Feed } from "./types";
import { Output } from "rss-parser";
import { hashCode } from "./utils";

const storeFeeds = (feeds: Feed[]) => {
  localStorage.setItem("feeds", JSON.stringify(feeds));
};

const loadFeeds = (): Feed[] => {
  const feeds = localStorage.getItem("feeds");
  if (feeds !== null) {
    return JSON.parse(feeds);
  }
  return [];
};

const parseRss = async (rssUrl: string): Promise<Output> => {
  const rssObj: Output = await fetch(
    `/.netlify/functions/hello?rssUrl=${rssUrl}`
  ).then(res => res.json());
  return rssObj;
};

export const useFeeds = (): [Feed[], (feed: string) => void] => {
  const [rssFeedCollection, setRssFeedCollection] = useState<Feed[]>([]);

  const addFeed = (url: string) => {
    parseRss(url).then(feed => {

      const newFeed = {
        id: hashCode("hello"),
        ...feed
      };

      setRssFeedCollection([...rssFeedCollection, newFeed]);
    });
  };

  useEffect(() => {
    addFeed("https://overreacted.io/rss.xml");
  }, []);

  return [rssFeedCollection, addFeed];
};
