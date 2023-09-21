import React from 'react';
import { useContext } from 'react';
import { AssestContext } from '../../Grand/Grand';

const Uncle = () => {
    const gift = useContext(AssestContext);
    
    // console.log(gift)
    return (
        <div>
            <h1>Uncle</h1>

            <h1>Gift:{gift}</h1>

        </div>
    );
};

export default Uncle;