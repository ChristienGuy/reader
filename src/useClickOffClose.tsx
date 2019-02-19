import { useEffect } from "react";

const useClickOffClose = () => {
  const closeComponent = () => {
    // do something to close
    console.log("closing");
  };

  useEffect(() => {
    window.addEventListener("click", closeComponent);

    return () => {
      window.removeEventListener("click", closeComponent);
    };
  });
};

export { useClickOffClose };
