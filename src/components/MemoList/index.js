import MemoItem from "../MemoItem";
import "./index.css";

function MemoList({
  memos,
  setSelectMemoIndex,
  selectedMemoIndex,
  deleteMemo,
}) {
  return (
    <div>
      {memos.map((memo, idx) => (
        <MemoItem
          key={idx}
          onClick={() => {
            setSelectMemoIndex(idx);
          }}
          isSelected={idx == selectedMemoIndex}
          onClickDelete={(e) => {
            deleteMemo(idx);
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

export default MemoList;
