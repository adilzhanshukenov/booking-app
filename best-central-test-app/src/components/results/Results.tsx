import { Room } from "../../stores/roomstore/types";
import RoomCard from "../room-card/RoomCard";
import "./results.css";
import roomStore from "../../stores/roomstore/roomStore";
import { observer } from "mobx-react-lite";

const Results = observer(() => {
  const roomCards = roomStore.availableRooms.map((room: Room, index) => (
    <RoomCard
      key={index}
      id={room.id}
      name={room.name}
      bedrooms={room.bedrooms}
      price={room.price}
      view={room.view}
      bookings={room.bookings}
    />
  ));

  return <div id="results">{roomCards}</div>;
});

export default Results;
