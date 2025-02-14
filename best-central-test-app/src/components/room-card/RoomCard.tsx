import { observer } from "mobx-react-lite";
import { Room } from "../../stores/roomstore/types";
import "./roomcard.css";
import modalStore from "../../stores/modalStore/modalStore";
import roomStore from "../../stores/roomstore/roomStore";

const RoomCard = observer((room: Room) => {
  return (
    <div id="room">
      <div id="photo">
        <p>Photo</p>
      </div>
      <div id="room-content">
        <div>
          <h2>
            <b>{room.name}</b>
          </h2>
          <p>
            Bedrooms: <b>{room.bedrooms}</b>
          </p>
          <p>
            Room price: <b>${room.price}</b> per night
          </p>
          <p>
            Room view: <b>{room.view} view</b>
          </p>
        </div>
        <button
          onClick={async () => {
            modalStore.openModal("bookRoomModal");
            await roomStore.selectRoom(room);
          }}
        >
          Book
        </button>
      </div>
    </div>
  );
});

export default RoomCard;
