import { useState, useEffect } from "react";
import { Output } from "rss-parser";
import { FeedType } from "./types";
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
  console.log("Storing feeds", feeds);

  localStorage.setItem("feeds", JSON.stringify(feeds));
};

type useFeedsType = [FeedType[], (url: string) => void];
export const useFeeds = (): useFeedsType => {
  const [feeds, setFeeds] = useState<FeedType[]>([]);

  const addFeed = (url: string) => {
    // TODO: check if feed is already added before making a network call
    parseRss(url).then(feed => {
      const newFeed = {
        id: hashCode("hello"),
        ...feed
      };

      const newFeeds = [...feeds, newFeed];
      setFeeds(newFeeds);
      storeFeeds(newFeeds);
    });
  };

  useEffect(() => {
    const feeds = loadFeeds();
    setFeeds(feeds);
  }, []);

  return [feeds, addFeed];
};
