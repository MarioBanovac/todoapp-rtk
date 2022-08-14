import { useDispatch } from "react-redux";
import { clearCompletedTodos } from "features/todo/todoSlice";

function TodoFooter({ className, todos }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCompletedTodos());
  };

  const leftTodos = todos.reduce((acc, { isCompleted }) => {
    if (!isCompleted) {
      acc += 1;
    }
    return acc;
  }, 0);

  return (
    <div className={className}>
      <span>
        {leftTodos} item{leftTodos === 1 ? "" : "s"} left
      </span>
      <button onClick={handleClick}>Clear completed</button>
    </div>
  );
}
export default TodoFooter;
