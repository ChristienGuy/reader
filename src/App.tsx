import React from "react";
import FeedListPage from "./pages/FeedListPage";
import FeedItemsListPage from "./pages/FeedItemsListPage";
import { Router } from "@reach/router";

/**
 * TODO: click through feeds to show list of articles
 */

const App = () => {

  return (
    <Router>
      <FeedListPage path="/" />
      <FeedItemsListPage path="/feed/:id" />
    </Router>
  );
};
export default App;
