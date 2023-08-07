import LevelFourComponent from "./level-four-component";

function LevelThreeComponent() {
  return (
    <div>
      <h1>Level 3</h1>
      <ul>
        <li>
          <LevelFourComponent />
        </li>
      </ul>
    </div>
  );
}

export default LevelThreeComponent;
