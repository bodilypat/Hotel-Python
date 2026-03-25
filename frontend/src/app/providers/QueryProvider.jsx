/* -- src/app/providers/QueryProvider.jsx 
| -- Provider for managing and executing database queries in a React application
| -- It uses the React Context API to share query-related state and functions across the component tree
*/ 
import { useQuery, useMutation, useQueryClient } from 'react-query';
import * as questService from '@/features/quests/services/questService';

// Get guests 
export const useGuests = (params) => {
    return useQuery({
        queryKey: ['guests', params],
        queryFn: () => questService.getGuests(params),
    });
};

// Create guest 
export const useCreateGuest = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: questService.createGuest,
        onSuccess: () => {
            queryClient.invalidateQueries('guests');
        },
    });
};

// Update guest 
export const useUpdateGuest = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: questService.updateGuest,
        onSuccess: () => {
            queryClient.invalidateQueries('guests');
        },
    });
};

// Delete guest
export const useDeleteGuest = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: questService.deleteGuest,
        onSuccess: () => {
            queryClient.invalidateQueries('guests');
        },
    });
};
