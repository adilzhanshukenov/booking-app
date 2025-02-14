import { FormEvent, useState } from "react";
import roomStore from "../../stores/roomstore/roomStore";
import "./dates.css";
import { Booking } from "../../stores/roomstore/types";
import { observer } from "mobx-react-lite";

const Dates = observer(() => {
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
    await roomStore.setTargetBooking(formData);
    roomStore.availableRooms = await roomStore.filterRooms(
      roomStore.filters,
      roomStore.targetBooking
    );
  };

  return (
    <form onSubmit={handleSubmit} className="search-dates">
      <div>
        <label>Start Date: </label>
        <input
          type="date"
          value={formData.startDate}
          name="startDate"
          placeholder="start date"
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label>End Date: </label>
        <input
          type="date"
          value={formData.endDate}
          name="endDate"
          placeholder="end date"
          onChange={handleChange}
        />
      </div>
      <button type="submit">search</button>
    </form>
  );
});

export default Dates;
