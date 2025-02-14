export interface Room {
    id: number;
    name: string;
    bedrooms: number;
    price: number;
    view: string;
    bookings: Booking[];
}

export interface Booking {
    startDate: string,
    endDate: string
}

export interface Filter {
    bedrooms?: number;
    price?: number;
    view?: string;
}