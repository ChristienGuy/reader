import React from 'react';
import { FeedType } from "./types";

const FeedContext = React.createContext<{feeds: FeedType[], addFeed: (url: string) => void}>({feeds: [], addFeed: () => {}});

export {
  FeedContext
}