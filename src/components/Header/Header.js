import { ContentContainer } from "ui";
import { MoonIcon } from "icons/icons";
export default function Header(props) {
  const { className } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <input type="text" placeholder="Create a new todo..." />
      </form>
    </ContentContainer>
  );
}
