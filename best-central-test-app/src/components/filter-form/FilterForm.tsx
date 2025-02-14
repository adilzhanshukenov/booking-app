import { FormEvent, useState } from "react";
import { Filter } from "../../stores/roomstore/types";
import roomStore from "../../stores/roomstore/roomStore";
import { observer } from "mobx-react-lite";
import modalStore from "../../stores/modalStore/modalStore";

const FilterForm: React.FC = observer(() => {
  const [formData, setFormData] = useState<Filter>({
    bedrooms: 0,
    price: 0,
    view: "",
  });

  const handleChange = async (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Form data: ", formData);
    await roomStore.setFilter({
      ...formData,
      bedrooms: Number(formData.bedrooms),
      price: Number(formData.price),
    });
    console.log("Filters: ", roomStore.filters.price);
    roomStore.availableRooms = await roomStore.filterRooms(
      roomStore.filters,
      roomStore.targetBooking
    );
    modalStore.closeModal();
  };

  return (
    <form
      className="modal-form"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
      }}
      onSubmit={handleSubmit}
    >
      <h2>Filter</h2>
      <div className="search-input">
        <label>Bedrooms</label>
        <input
          type="number"
          name="bedrooms"
          placeholder="Type number of bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
        />
      </div>
      <div className="search-input">
        <label>Max Price</label>
        <input
          type="number"
          value={formData.price}
          name="price"
          placeholder="Type preffered price"
          onChange={handleChange}
        />
      </div>
      <div className="search-input">
        <label>View</label>
        <select name="view" value={formData.view} onChange={handleChange}>
          <option value="">--Select view--</option>
          <option value="Ocean">Ocean</option>
          <option value="Park">Park</option>
          <option value="Street">Street</option>
        </select>
      </div>
      <div className="search-input">
        <button type="submit">Filter</button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            modalStore.closeModal();
          }}
        >
          Close
        </button>
      </div>
    </form>
  );
});

export default FilterForm;
