import React, { useState, useContext } from "react";
import { FeedContext } from "./FeedContext";

const AddFeed = () => {
  const [inputState, setInputState] = useState("");
  const { addFeed } = useContext(FeedContext);

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
