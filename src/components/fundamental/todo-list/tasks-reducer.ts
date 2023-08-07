import { v4 as uuidv4 } from "uuid";

export enum TasksActionType {
  Create = "create",
  Update = "update",
  UpdateCheckbox = "update-checkbox",
  Delete = "delete",
}

export interface TodoData {
  title: string;
  isActive: boolean;
  id: string;
}

export interface TodoAction {
  type: string;
  id: string;
  title?: string;
  isActive?: boolean;
}

export function tasksReducer(
  tasks: TodoData[],
  action: TodoAction
): TodoData[] {
  switch (action.type) {
    case TasksActionType.Create: {
      const newTodos = [...tasks];
      newTodos.push({
        title: action.title as string,
        isActive: true,
        id: uuidv4(),
      });

      return newTodos;
    }

    case TasksActionType.Update: {
      const newTasks = tasks.map((t) => {
        if (t.id !== action.id) {
          return t;
        }

        return {
          ...t,
          title: action.title as string,
        };
      });

      return newTasks;
    }

    case TasksActionType.UpdateCheckbox: {
      const newTasks = tasks.map((t) => {
        if (t.id !== action.id) {
          return t;
        }

        return {
          ...t,
          isActive: action.isActive as boolean,
        };
      });

      return newTasks;
    }

    case TasksActionType.Delete: {
      const newTasks = tasks.filter((t) => t.id !== action.id);

      return newTasks;
    }

    default: {
      return tasks;
    }
  }
}
