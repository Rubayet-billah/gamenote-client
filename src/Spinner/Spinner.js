import React from 'react';
import './Spinner.css'

const Spinner = () => {
    return (
        <div className='w-fit mx-auto mt-12 md:mt-48'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Spinner;