import { observer } from "mobx-react-lite";
import { Booking } from "../../stores/roomstore/types";
import { FormEvent, useState } from "react";
import roomStore from "../../stores/roomstore/roomStore";
import modalStore from "../../stores/modalStore/modalStore";

const BookRoomForm = observer(() => {
  const [formData, setFormData] = useState<Booking>({
    startDate: "",
    endDate: "",
  });

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (roomStore.availableRooms.length > 0) {
      await roomStore.setTargetBooking(formData);
      const bookingSuccess = await roomStore.bookRoom(
        roomStore.selectedRoom?.id,
        roomStore.targetBooking
      );
      alert(
        `Room ${roomStore.selectedRoom?.name} is booked successfully! (check console log)`
      );
      console.log(
        bookingSuccess ? "Room booked successfully!" : "Failed to book room."
      );
    }
  };

  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <h2>Book room</h2>
      <div className="search-input">
        <label>Check In</label>
        <input
          type="date"
          value={formData.startDate}
          name="startDate"
          placeholder="start date"
          onChange={handleChange}
          required
        />
      </div>
      <div className="search-input">
        <label>Check Out</label>
        <input
          type="date"
          value={formData?.endDate}
          name="endDate"
          placeholder="end date"
          onChange={handleChange}
          required
        />
      </div>
      <div className="search-input">
        <button type="submit">Book</button>
        <button type="button" onClick={() => modalStore.closeModal()}>
          Cancel
        </button>
      </div>
    </form>
  );
});

export default BookRoomForm;
