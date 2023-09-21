import React from 'react';
import Brother from './Brother/Brother';
import MySelf from './MySelf/MySelf';
import Sister from './Sister/Sister';

const Dad = () => {
    return (
      <div>
        <h1 className="text-center">Dad</h1>
        <div className="flex justify-between gap-7">
          <div className="border-2 p-2">
            <MySelf></MySelf>
             
          </div>
          <div className="border-2 p-2">
            <Brother></Brother>
          </div>
          <div className="border-2 p-2">
            <Sister></Sister>
          </div>
        </div>
      </div>
    );
};

export default Dad;