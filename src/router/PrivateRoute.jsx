import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>;
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>

};

export default PrivateRoute;