import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./todo-list";

interface TodoData {
  title: string;
  isActive: boolean;
  id: string;
}

function Todo() {
  const [todos, setTodos] = useState<TodoData[]>([]);
  const [inputData, setInputData] = useState<string>("");

  const onAddTask = () => {
    const newTodos = [...todos];
    newTodos.push({
      title: inputData,
      isActive: true,
      id: uuidv4()
    });
    setTodos(newTodos);
    setInputData("");
  };

  const onDeleteTask = (id: string) => {
    const newTodos = todos.filter(t => t.id !== id);
    setTodos(newTodos);
  };

  const onUpdateTask = (text: string, id: string) => {  
    setTodos(todos.map(t => {
      if (t.id !== id) {
        return t;
      }

      return {
        ...t,
        title: text
      }
    }));
  };

  const onCheckBoxUpdateTask = (isActive: boolean, id: string) => {
    setTodos(todos.map(t => {
      if (t.id !== id) {
        return t;
      }

      return {
        ...t,
        isActive
      }
    }));
  }

  return (
    <div>
      <div className="m-b-5">
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />{" "}
        <button onClick={onAddTask}>Add</button>
      </div>
      {todos.map(({title, isActive, id}) => (
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

export default Todo;
