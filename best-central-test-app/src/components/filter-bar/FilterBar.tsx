import modalStore from "../../stores/modalStore/modalStore";
import "./filterbar.css";

function FilterBar() {
  const handleClick = () => {
    modalStore.openModal("filterFormModal");
  };

  return (
    <div id="filterbar">
      <h3>Available rooms</h3>
      <button type="button" onClick={handleClick}>
        Filter
      </button>
    </div>
  );
}

export default FilterBar;
