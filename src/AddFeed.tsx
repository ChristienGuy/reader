import React, { useState } from "react";
import { useFeeds } from "./useFeeds";

const AddFeed = () => {
  const [feeds, addFeed] = useFeeds();
  const [inputState, setInputState] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addFeed(inputState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputState} onChange={handleInputChange} />
    </form>
  );
};

export default AddFeed;
