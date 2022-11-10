import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Spinner from '../Spinner/Spinner';
// import './Spinner.css'

const PrivatRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)

    if (loader) {
        return <Spinner></Spinner>
    }
    if (user?.uid) {
        return children;
    }
    else {
        return <Navigate to='/login' />
    }
};

export default PrivatRoute;