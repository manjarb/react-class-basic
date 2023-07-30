import { useState } from "react";

const initialItems = ["item1", "item2", "item3"];

export function ExampleApp01() {
  const [choices, setChoices] = useState(initialItems);

  const onInputChange = (e, index) => {
    // Update choice at index
    const newChoices = [...choices];
    newChoices[index] = e.target.value;
    setChoices(newChoices);
  };

  return (
    <>
      <h2>What's your travel snack?</h2>

      {choices.map((c, index) => {
        return (
          <div>
            <input
              value={c}
              onChange={(e) => onInputChange(e, index)}
            />
          </div>
        );
      })}
    </>
  );
}
