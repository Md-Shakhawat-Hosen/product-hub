import React from 'react';
import { useContext } from 'react';
import { AssestContext } from '../../Grand/Grand';

const MySelf = () => {

    const [value,setValue] = useContext(AssestContext);
   
    
    
     
    return (
      <div>
        <h1>My self</h1>
        <h1>Special:{value}</h1>
        <button onClick={()=>{setValue(value+1000)}} className='bg-cyan-400 p-2'>add tk</button>
      </div>
    );
};

export default MySelf;