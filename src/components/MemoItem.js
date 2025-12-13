function MemoItem({ children, onClick, isSelected }) {
  return (
    <div
      className={"memoItem" + (isSelected ? " selected" : "")}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default MemoItem;
