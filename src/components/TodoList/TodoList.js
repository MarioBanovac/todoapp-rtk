import { useSelector } from "react-redux";
import { ContentContainer, StyledTodoItem, StyledTodoFooter } from "ui";

export default function TodoList(props) {
  const todos = useSelector((state) => state.todos);
  const { className } = props;
  return (
    <ContentContainer className={className}>
      <ul className={className}>
        {todos.map((todo) => (
          <StyledTodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      {todos.length > 0 && <StyledTodoFooter length={todos.length} />}
    </ContentContainer>
  );
}
