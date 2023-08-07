import { useContext } from "react";
import { LevelContext } from "./level-context";

function LevelFourComponent() {
  const level = useContext(LevelContext);
  return (
    <div>
      <h1>Level 4</h1>
      <p>Context Value: {level}</p>
    </div>
  );
}

export default LevelFourComponent;