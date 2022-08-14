import { useDispatch } from "react-redux";
import { useState } from "react";
import { ContentContainer, StyledFilterButton } from "ui";
import { changeFilter } from "features/filter/filterSlice";

function FilterContainer({ className }) {
  const dispatch = useDispatch();
  const [buttonValues, setButtonValues] = useState([
    {
      isActive: true,
      text: "All",
      id: 0,
    },
    {
      isActive: false,
      text: "Active",
      id: 1,
    },
    {
      isActive: false,
      text: "Completed",
      id: 2,
    },
  ]);

  const handleClick = (text) => {
    const newValues = buttonValues.map((value) => {
      if (value.text !== text) {
        value.isActive = false;
      } else {
        value.isActive = true;
      }
      return value;
    });
    setButtonValues(newValues);
    dispatch(changeFilter(text));
  };

  return (
    <ContentContainer className={className}>
      {buttonValues.map(({ isActive, text, id }) => (
        <StyledFilterButton
          key={id}
          isActive={isActive}
          text={text}
          handleClick={handleClick}
        />
      ))}
    </ContentContainer>
  );
}
export default FilterContainer;
