import { observer } from "mobx-react-lite";
import "./modal.css";
import modalStore from "../../../stores/modalStore/modalStore";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = observer(({ children }) => {
  if (!modalStore.activeModal) return null; // Do not render if no modal is active

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
});

export default Modal;
