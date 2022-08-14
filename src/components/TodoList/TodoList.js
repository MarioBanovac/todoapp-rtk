import { useSelector } from "react-redux";
import { ContentContainer, StyledTodoItem, StyledTodoFooter } from "ui";

export default function TodoList(props) {
  const todos = useSelector((state) => state.todos);
  let filtertedTodos = [];
  const { filterValue } = useSelector((state) => state.filter);
  if (filterValue === "All") {
    filtertedTodos = todos;
  } else if (filterValue === "Active") {
    filtertedTodos = todos.filter((todo) => !todo.isCompleted);
  } else {
    filtertedTodos = todos.filter((todo) => todo.isCompleted);
  }
  const { className } = props;
  return (
    <ContentContainer className={className}>
      <ul className={className}>
        {filtertedTodos.map((todo) => (
          <StyledTodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      {filtertedTodos.length > 0 && <StyledTodoFooter todos={todos} />}
    </ContentContainer>
  );
}
