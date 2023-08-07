import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./todo-list";
import { TasksActionType, tasksReducer } from "./tasks-reducer";

function TodoReducer() {
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

  const onDeleteTask = (id: string) => {
    dispatch({
      type: TasksActionType.Delete,
      id,
    });
  };

  const onUpdateTask = (text: string, id: string) => {
    dispatch({
      type: TasksActionType.Update,
      id,
      title: text
    });
  };

  const onCheckBoxUpdateTask = (isActive: boolean, id: string) => {
    dispatch({
      type: TasksActionType.UpdateCheckbox,
      id,
      isActive
    });
  };

  return (
    <div>
      <h2>Todo Reducer</h2>
      <div className="m-b-5">
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />{" "}
        <button onClick={onAddTask}>Add</button>
      </div>
      {todos.map(({ title, isActive, id }) => (
        <TodoList
          key={id}
          title={title}
          isActive={isActive}
          onDelete={() => onDeleteTask(id)}
          onInputUpdate={(text) => onUpdateTask(text, id)}
          onCheckBoxUpdate={(isActive) => onCheckBoxUpdateTask(isActive, id)}
        />
      ))}
    </div>
  );
}

export default TodoReducer;
