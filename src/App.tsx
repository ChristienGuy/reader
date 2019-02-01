import React, { useEffect } from "react";
import Feeds from "./pages/Feeds";
import FeedsHome from "./pages/FeedsHome";
import Feed from "./pages/Feed";
import FeedHome from "./pages/FeedHome";
import { Router, Link } from "@reach/router";

import { FeedContext } from "./FeedContext";
import { useFeeds } from "./useFeed";

const App = () => {
  const [feeds, addFeed] = useFeeds();

  // useEffect(() => {
  //   addFeed("https://overreacted.io/rss.xml");
  // }, [])

  return (
    <FeedContext.Provider
      value={{
        feeds,
        addFeed
      }}
    >
    {/* temp nav */}
      <div>
        <Link to="/feeds">Feeds</Link>
      </div>
      <Router>
        <Feeds path="feeds">
          <FeedsHome path="/" />
          <Feed path=":id">
            <FeedHome path="/" />
          </Feed>
        </Feeds>
      </Router>
    </FeedContext.Provider>
  );
};
export default App;
