function FilterButton({ className, text, handleClick }) {
  return (
    <button onClick={() => handleClick(text)} className={className}>
      {text}
    </button>
  );
}
export default FilterButton;
