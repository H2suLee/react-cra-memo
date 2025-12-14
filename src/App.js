import "./App.css";
import { useState, useCallback } from "react";
import SideBar from "./components/SideBar";
import MemoContainer from "./components/MemoContainer";
import { setItem, getItem } from "./lib/storage";
import debounce from "lodash.debounce";

const debouncedSetItem = debounce(setItem, 5000);

function App() {
  const [memos, setMemos] = useState(getItem("memo") || []);

  const [selectedMemoIndex, setSelectMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      /**
      const newMemos = [...memos]; // 불변성 확보를 위해 memos 원본을 사용하지 않음.
      newMemos[selectedMemoIndex] = newMemo;
      setMemos(newMemos); // setMemos(memos) 로는 갱신안됨, reference상 같은 오브젝트(같은 주소)라고 생각하기 때문에 렌더링 안됨
      debouncedSetItem("memo", newMemos);
      */
      // useCallback 이 memos 에 의존하는걸 막기위해 아래와 같이 리팩토링

      setMemos((memos) => {
        const newMemos = [...memos]; // 불변성 확보를 위해 memos 원본을 사용하지 않음.
        newMemos[selectedMemoIndex] = newMemo;
        debouncedSetItem("memo", newMemos);
        return newMemos;
      });
    },
    [selectedMemoIndex]
  );

  const addMemo = () => {
    const now = new Date().getTime();
    const newMemos = [
      ...memos,
      {
        title: "Untitled",
        cont: "",
        credt: now,
        upddt: now,
      },
    ];
    setMemos(newMemos);

    setSelectMemoIndex(memos.length);
    debouncedSetItem("memo", newMemos);
  };

  const deleteMemo = useCallback(
    (index) => {
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos.splice(index, 1);

        debouncedSetItem("memo", newMemos);
        return newMemos;
      });

      if (index == selectedMemoIndex) {
        setSelectMemoIndex(0);
      }
    },
    [selectedMemoIndex]
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectMemoIndex={setSelectMemoIndex}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
