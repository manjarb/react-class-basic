import logo from "./logo.svg";
import "./App.css";
import TodoContextReducerComponent from "./components/fundamental/todo-list/todo-context-reducer-component";
import RefComponent from "./components/advanced/referencing-value/ref-component";
import StopWatch from "./components/advanced/referencing-value/stopwatch";
import DomReferenceForm from "./components/advanced/referencing-value/dom-reference";
import BasicEffectComponent from "./components/advanced/synchronizing-effect/basic-effect-component";
import { NoNeedEffectComponent } from "./components/advanced/synchronizing-effect/no-need-effect-component";
import CustomHookSample from "./components/advanced/custom-hooks/custom-hook-sample";


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
      {/* <Todo /> */}
      {/* <TodoReducer /> */}
      {/* <LevelOneComponent /> */}
      {/* <TodoContextReducerComponent /> */}
      {/* <RefComponent /> */}
      {/* <StopWatch /> */}
      {/* <DomReferenceForm /> */}
      {/* <BasicEffectComponent /> */}
      {/* <NoNeedEffectComponent /> */}
      <CustomHookSample />
    </div>
  );
}

export default App;
