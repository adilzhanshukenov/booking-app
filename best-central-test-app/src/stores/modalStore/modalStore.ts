import { action, makeAutoObservable, observable } from "mobx";

class ModalStore {
    
    @observable isOpen: boolean = false;
    @observable activeModal: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    @action
    openModal = (activeModal: string) => {
        this.activeModal = activeModal;
    }

    @action
    closeModal = () => {
        this.activeModal = null;
    }
}

const modalStore = new ModalStore();
export default modalStore;