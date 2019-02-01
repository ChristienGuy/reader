import React from "react";
import { FeedType } from "./types";

type FeedContextType = {
  feeds: FeedType[];
  addFeed: (url: string) => void;
};

const defaultValue = {
  feeds: [],
  addFeed: () => {}
}
const FeedContext = React.createContext<FeedContextType>(defaultValue);

export { FeedContext };
