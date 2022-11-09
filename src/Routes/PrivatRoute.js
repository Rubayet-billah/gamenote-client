import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import './Spinner.css'

const PrivatRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)

    if (loader) {
        return <div className='w-fit mx-auto mt-12 md:mt-48'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    }
    if (user?.uid) {
        return children;
    }
    else {
        return <Navigate to='/login' />
    }
};

export default PrivatRoute;