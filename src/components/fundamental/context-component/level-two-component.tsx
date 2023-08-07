import LevelThreeComponent from "./level-three-component";

function LevelTwoComponent() {
  return (
    <div>
      <h1>Level 2</h1>
      <ul>
        <li>
          <LevelThreeComponent />
        </li>
      </ul>
    </div>
  );
}

export default LevelTwoComponent;
