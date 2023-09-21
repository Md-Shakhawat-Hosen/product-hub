import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Dad from '../Dad/Dad';
import Uncle from '../Dad/Uncle/Uncle';

export const AssestContext = createContext("gold");

const Grand = () => {
     const [value, setValue] = useState(1000)
 
    return (
      <div>
        <h1 className="text-center">GrandPa</h1>
        <AssestContext.Provider value={[value,setValue]}>
          <div className="flex justify-center gap-6">
            <div className="border-2 p-5">
              <Dad></Dad>
            </div>
            <div className="border-2 p-5">
              <Uncle></Uncle>
            </div>
            <div className="border-2 p-5">
              <Aunty></Aunty>
            </div>
          </div>
        </AssestContext.Provider>
      </div>
    );
};

export default Grand;