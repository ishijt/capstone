import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
    return (
        <div className='confirm'>
            <div>
                <h1>Your booking has been <span>confirmed!</span></h1>
                <Link to="/"><button aria-label='On Click'>Return to Homepage</button></Link>
            </div>
        </div>
    );
};

export default ConfirmedBooking;