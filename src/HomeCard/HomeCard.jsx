import React from 'react';
import { Link, useNavigation } from 'react-router-dom';

const HomeCard = ({product}) => {
    const {id,title,rating,images,price,description} = product;

    return (
      <div>
        <div className="border-2 p-4">
          <figure>
            <img className="h-[200px] mx-auto" src={images[0]} alt="Shoes" />
          </figure>
          <div className="space-y-2">
            <h2 className="font-bold">
              {title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div className='flex justify-between space-y-3'>
              <div>
                   <h1>Price:{price}</h1>
              </div>
              <div>
                <h1>Rating:{rating}</h1>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomeCard;