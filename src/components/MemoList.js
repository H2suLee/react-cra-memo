import MemoItem from "./MemoItem";

function MemoList({ memos, setSelectMemoIndex, selectedMemoIndex }) {
  return (
    <div>
      {memos.map((memo, idx) => (
        <MemoItem
          key={idx}
          onClick={() => {
            setSelectMemoIndex(idx);
          }}
          isSelected={idx == selectedMemoIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

export default MemoList;
