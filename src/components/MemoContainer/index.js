import "./index.css";
function MemoContainer({ memo, setMemo }) {
  if (memo === undefined) {
    return (
      <div>
        <h1>메모가 없습니다.</h1>
        <h2>새로운 메모를 추가해 주세요.</h2>
      </div>
    );
  }
  return (
    <div className="MemoContainer">
      <div>
        <input
          type="text"
          className="memoTitle"
          value={memo.title}
          onChange={(e) => {
            setMemo({
              ...memo,
              title: e.target.value,
              upddt: new Date().getTime(),
            });
          }}
        ></input>
      </div>
      <textarea
        className="memoCont"
        value={memo.cont}
        onChange={(e) => {
          setMemo({
            ...memo,
            cont: e.target.value,
            upddt: new Date().getTime(),
          });
        }}
      ></textarea>
    </div>
  );
}

export default MemoContainer;
