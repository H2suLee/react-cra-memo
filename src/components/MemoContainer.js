function MemoContainer({ memo, setMemo }) {
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
      <div></div>{" "}
    </div>
  );
}

export default MemoContainer;
