import MemoList from "./MemoList";
import SideBarFooter from "./SideBarFooter";
import SideBarHeader from "./SideBarHeader";

function SideBar({ memos, selectedMemoIndex, setSelectMemoIndex }) {
  console.log("sidebar");
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectMemoIndex={setSelectMemoIndex}
      />
      <SideBarFooter />
    </div>
  );
}

export default SideBar;
