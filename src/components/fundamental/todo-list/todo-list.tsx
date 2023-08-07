import { useState } from "react";
import classes from './Todo.module.scss';

interface TodoListProps {
  title: string;
  isActive: boolean;
  onInputUpdate: (text: string) => void;
  onDelete: () => void;
  onCheckBoxUpdate: (isActive: boolean) => void;
}

function TodoList({ title, isActive, onDelete, onInputUpdate, onCheckBoxUpdate }: TodoListProps) {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const onCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckBoxUpdate(!e.target.checked);
  }

  return (
    <div className="m-b-5">
      <input type="checkbox" onChange={onCheckBoxChange}/>
      {isEditMode ? (
        <>
          <input type="text" className="m-r-5" value={title} onChange={(e) => onInputUpdate(e.target.value)}/>
          <button className="m-r-5" onClick={() => setIsEditMode(false)}>Save</button>
        </>
      ) : (
        <>
          <span className={isActive ? '' : classes['in-active']}>{title}</span> <button className="m-r-5" onClick={() => setIsEditMode(true)}>Edit</button>
        </>
      )}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default TodoList;
