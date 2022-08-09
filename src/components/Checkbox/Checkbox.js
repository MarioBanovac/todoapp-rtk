import { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTodo } from "features/todo/todoSlice";
import { StyledSpan } from "ui";

export default function Checkbox(props) {
  const { className, todo } = props;
  const dispatch = useDispatch();
  const defaultChecked = todo.isCompleted;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    dispatch(completeTodo(todo.id));
  };

  return (
    <div className={className}>
      <label>
        <input onChange={handleChange} type="checkbox" checked={isChecked} />
        <StyledSpan text={todo.text} isChecked={isChecked} />
      </label>
    </div>
  );
}
