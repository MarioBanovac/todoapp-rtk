import { useState } from "react";
import { useDispatch } from "react-redux";
import { ContentContainer } from "ui";
import { MoonIcon } from "icons/icons";
import { addTodo } from "features/todo/todoSlice";
export default function Header(props) {
  const { className } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        text: value,
        id: Math.random(),
        isCompleted: false,
      })
    );
    setValue("");
  };
  return (
    <ContentContainer className={className}>
      <div>
        <h2>Todo</h2>
        <div>
          <MoonIcon />{" "}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={handleChange}
          type="text"
          placeholder="Create a new todo..."
        />
      </form>
    </ContentContainer>
  );
}
