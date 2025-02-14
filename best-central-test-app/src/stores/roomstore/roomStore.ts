import { action, makeAutoObservable, observable } from "mobx";
import { Booking, Filter, Room } from "./types";

class RoomStore {

    @observable rooms: Room[] = [      
        { id: 1, name: "Deluxe Suite", bedrooms: 2, price: 200, view: "Ocean", bookings: [] },
        { id: 2, name: "Standard Room", bedrooms: 1, price: 100, view: "Park", bookings: [{ startDate: "2025-02-05", endDate: "2025-02-15" }] },
        { id: 3, name: "Penthouse", bedrooms: 3, price: 500, view: "Street", bookings: [] }
    ];
    @observable targetBooking: Booking = {startDate: "", endDate: ""};
    @observable filters: Filter = {};
    @observable availableRooms: Room[] = [];
    @observable selectedRoom: Room | null = null

    constructor() {
        makeAutoObservable(this);
    }

    countIntersections(ranges: Booking[], targetRange: Booking): number {
        const targetStart = new Date(targetRange.startDate);
        const targetEnd = new Date(targetRange.endDate);

        return ranges.filter(range => {
            const start = new Date(range.startDate);
            const end = new Date(range.endDate);
            return start <= targetEnd && end >= targetStart;
        }).length;
    }

    checkAvailability(room: Room, targetRange: Booking): boolean {
        return this.countIntersections(room.bookings, targetRange) === 0;
    }

    @action
   filterRooms = async (filters: { bedrooms?: number; price?: number; view?: string }, targetRange: Booking): Promise<Room[]> => {
        return  this.rooms.filter(room => 
            (!filters.bedrooms || room.bedrooms === filters.bedrooms) &&
            (!filters.price || room.price <= filters.price) &&
            (!filters.view || room.view === filters.view) &&
            this.checkAvailability(room, targetRange)
        );
    }

    @action
    bookRoom = async (roomId: number | undefined, targetRange: Booking): Promise<boolean> => {
        const room = this.rooms.find(r => r.id === roomId);
        if (room && this.checkAvailability(room, targetRange)) {
            room.bookings.push(targetRange);
            for (const r of room.bookings) {
                console.log("Room bookings: ", r.startDate.toString(), r.endDate.toString())
            }
            return true;
        }
        return false;
    }

    @action
    setTargetBooking = async (booking: Booking) => {
         this.targetBooking = booking;
    }

    @action
    setFilter = async (filters: Filter) => {
        this.filters = filters;
    }

    @action
    selectRoom = async (room: Room) => {
        this.selectedRoom = room;
    }
}

const roomStore = new RoomStore();
export default roomStore;