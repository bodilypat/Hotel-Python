/* src/features/auth/hooks/useLogin.js 
| -- Hook for handling login functionality
| -- Trigger API calls for login
 */ 
import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../services/auth.api';
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const { setAuthData } = useAuth();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: loginApi,

        onSuccess: (data) => {
            const { token, user } = data;
            setAuthData(token, user);
            navigate('/dashboard'); // Redirect to dashboard after successful login
        },

        onError: (error) => {
            console.error('Login failed:', error.response?.data?.message || error.message);
        }
    });
};


