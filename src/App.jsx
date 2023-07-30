import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./components/my-first-component/my-first-component";
import ConditionalRender from "./components/conditional-render/conditional-render";
import { List } from "./components/render-lists/list";
import { Button } from "./components/responding-event/button";
import { PlayButton } from "./components/responding-event/play-button";
import { Gallery } from "./components/state/gallery";
import { ObjectForm } from "./components/state/object-form";
import { Input } from "./components/react-input/react-input";
import { ExampleApp01 } from "./example-apps/example-app-01";
import Panel from "./components/share-state/Panel";
import Accordian from './components/share-state/Accordian';
import Todo from "./components/todo-list/todo";


function App() {
  return (
    <div className="App container">
      {/* <MyFirstComponent /> */}
      {/* <ConditionalRender isShow={false}/> */}
      {/* <List /> */}
      {/* <PlayButton content="React"/> */}
      {/* <Gallery /> */}
      {/* <ObjectForm /> */}
      {/* <Input /> */}
      {/* <ExampleApp01 /> */}
      {/* <Accordian /> */}
      <Todo />
    </div>
  );
}

export default App;
