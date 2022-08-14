import { useDispatch } from "react-redux";
import { clearCompletedTodos } from "features/todo/todoSlice";

function TodoFooter({ className, length }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCompletedTodos());
  };

  return (
    <div className={className}>
      <span>{length} items left</span>
      <button onClick={handleClick}>Clear completed</button>
    </div>
  );
}
export default TodoFooter;
