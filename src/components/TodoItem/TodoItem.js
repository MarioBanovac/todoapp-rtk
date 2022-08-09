import { useDispatch } from "react-redux";
import { CrossIcon } from "icons/icons";
import { StyledCheckbox } from "ui";
import { deleteTodo } from "features/todo/todoSlice";

export default function TodoItem(props) {
  const { className, todo } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("mama");
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className={className}>
      <StyledCheckbox todo={todo} />
      <CrossIcon onClick={handleClick} />
    </li>
  );
}
