import { CrossIcon } from "icons/icons";
import { StyledCheckbox } from "ui";

export default function TodoItem(props) {
  const { className, todo } = props;

  return (
    <li className={className}>
      <StyledCheckbox todo={todo} />
      <CrossIcon />
    </li>
  );
}
