import { useState } from "react";

export function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setIndex(index + 1);
  };

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h3>{index}</h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
    </>
  );
}
