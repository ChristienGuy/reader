import React, { useState, useContext } from "react";
import { FeedContext } from "../../FeedContext";
import Input from "../Input";

const AddFeedInput = () => {
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
      <Input type="text" value={inputState} onChange={handleInputChange} />
      <input type="submit" value="Add feed" />
    </form>
  );
};

export { AddFeedInput as default };
