import "./index.css";
function MemoItem({ children, onClick, isSelected, onClickDelete }) {
  return (
    <div
      className={"memoItem" + (isSelected ? " selected" : "")}
      onClick={onClick}
    >
      {children}
      <button className="delBtn" onClick={onClickDelete}>
        x
      </button>
    </div>
  );
}

export default MemoItem;
