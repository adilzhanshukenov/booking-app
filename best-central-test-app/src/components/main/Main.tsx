import { observer } from "mobx-react-lite";
import modalStore from "../../stores/modalStore/modalStore";
import FilterBar from "../filter-bar/FilterBar";
import FilterForm from "../filter-form/FilterForm";
import Results from "../results/Results";
import Modal from "../shared/modal/Modal";
import "./main.css";
import roomStore from "../../stores/roomstore/roomStore";
import BookRoomForm from "../book-room-form/BookRoomForm";

const Main = observer(() => {
  return (
    <div id="main">
      {roomStore.availableRooms.length !== 0 && <FilterBar />}
      <Results />
      <Modal>
        {modalStore.activeModal === "filterFormModal" && <FilterForm />}
        {modalStore.activeModal === "bookRoomModal" && <BookRoomForm />}
      </Modal>
    </div>
  );
});

export default Main;
