import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TasksActionType, tasksReducer } from "./tasks-reducer";
import { TasksContext, TasksDispatchContext } from "./todo-context";
import TodoLists from "./todo-lists";

function TodoContextReducerComponent() {
  const [todos, dispatch] = useReducer(tasksReducer, []);
  const [inputData, setInputData] = useState<string>("");

  const onAddTask = () => {
    dispatch({
      type: TasksActionType.Create,
      title: inputData,
      isActive: true,
      id: uuidv4(),
    });
    setInputData("");
  };

  return (
    <TasksContext.Provider value={todos}>
      <TasksDispatchContext.Provider value={dispatch}>
        <div className="m-b-5">
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />{" "}
          <button onClick={onAddTask}>Add</button>
        </div>
        <TodoLists />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export default TodoContextReducerComponent;
