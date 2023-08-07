import { useState } from "react";

export function NestedObjectForm() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleTitleChange(value) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: value,
      },
    });
  }
}