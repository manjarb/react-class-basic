import { useContext } from "react";
import { TasksContext, TasksDispatchContext } from "./todo-context";
import TodoList from "./todo-list";
import { TasksActionType } from "./tasks-reducer";

function TodoLists() {
  const todos = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);

  return todos.map(({ title, isActive, id }) => (
    <TodoList
      key={id}
      title={title}
      isActive={isActive}
      onDelete={() =>
        dispatch({
          type: TasksActionType.Delete,
          id,
        })
      }
      onInputUpdate={(text) =>
        dispatch({
          type: TasksActionType.Update,
          id,
          title: text,
        })
      }
      onCheckBoxUpdate={(isActive) =>
        dispatch({
          type: TasksActionType.UpdateCheckbox,
          id,
          isActive,
        })
      }
    />
  ));
}

export default TodoLists;
