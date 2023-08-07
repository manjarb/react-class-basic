import { LevelContext } from "./level-context";
import LevelTwoComponent from "./level-two-component";

function LevelOneComponent() {
  return (
    <div>
      <h1>Level 1</h1>
      <LevelContext.Provider value={20}>
        <ul>
          <li>
            <LevelTwoComponent />
          </li>
        </ul>
      </LevelContext.Provider>
    </div>
  );
}

export default LevelOneComponent;
