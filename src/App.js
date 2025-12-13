import "./App.css";
import { useState } from "react";
import SideBar from "./components/SideBar";
import MemoContainer from "./components/MemoContainer";
function App() {
  const [memos, setMemos] = useState([
    {
      title: "memo1",
      cont: "This is memo1",
      credt: 1765633464448,
      upddt: 1765633464448,
    },
    {
      title: "memo2",
      cont: "This is memo2",
      credt: 1765633464448,
      upddt: 1765633464448,
    },
  ]);

  const [selectedMemoIndex, setSelectMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos]; // 불변성 확보를 위해 memos 원본을 사용하지 않음.
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos); // setMemos(memos) 로는 갱신안됨, reference상 같은 오브젝트(같은 주소)라고 생각하기 때문에 렌더링 안됨
  };
  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectMemoIndex={setSelectMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
