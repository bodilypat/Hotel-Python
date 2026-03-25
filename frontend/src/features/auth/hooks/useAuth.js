/* src/features/auth/hooks/useAuth.js 
| -- Hook for accessing authentication context
| --
 */ 
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};

export default useAuth;
