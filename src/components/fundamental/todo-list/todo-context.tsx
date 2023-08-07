import { Dispatch, createContext } from "react";
import { TodoAction, TodoData } from "./tasks-reducer";

export const TasksContext = createContext<TodoData[]>([]);
export const TasksDispatchContext = createContext<Dispatch<TodoAction>>(() => null);