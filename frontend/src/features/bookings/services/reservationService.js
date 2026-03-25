/* //src/features/bookings/services/reservationService.js
| -- Reservation service
*/ 
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as bookingService from "./booking_service";

// Get all bookings
export const useBookings = () => {
    return useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const { data } = await bookingService.getBookings();
            return data;
        },
    })
};

// Get a single booking by ID
export const useBooking = (bookingId) => {
    return useQuery({
        queryKey: ["booking", bookingId],
        queryFn: async () => {
            const { data } = await bookingService.getBooking(bookingId);
            return data;
        },
        enabled: !!bookingId, // Only run if bookingId is provided
    })
};

// Create a new booking
export const useCreateBooking = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (bookingData) => {
            const { data } = await bookingService.createBooking(bookingData);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["bookings"]);
        },
    })
};

// Update an existing booking
export const useUpdateBooking = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ bookingId, bookingData }) => {
            const { data } = await bookingService.updateBooking(bookingId, bookingData);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["bookings"]);
        },
    })
};

// Delete a booking
export const useDeleteBooking = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (bookingId) => {
            await bookingService.deleteBooking(bookingId);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["bookings"]);
        },
    })
};


