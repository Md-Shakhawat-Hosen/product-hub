import React from 'react';

const Spinner = () => {
    return (
      <div className='h-screen flex justify-center items-center'>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
};

export default Spinner;