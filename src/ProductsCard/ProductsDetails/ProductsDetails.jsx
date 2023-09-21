import React from 'react';
import {useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';

const ProductsDetails = () => {
     const navigate = useNavigate()
    const product = useLoaderData();
    // console.log(product);

     const {title, rating,price, description, thumbnail } =
       product;
        const spinner = useNavigation()
        const isL = spinner.state === "loading";

       const handleClickBack = () =>{
             navigate(-1)
       }
    return (
      <div>
        {isL ? <Spinner></Spinner> : ""}
        <div className="border-2 p-4">
          <figure>
            <img className="h-[200px] mx-auto" src={thumbnail} alt="Shoes" />
          </figure>
          <div className="space-y-2">
            <h2 className="font-bold">
              {title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{description}</p>
            <div className="flex justify-between space-y-3">
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
            {/* <Link to={`/product/${id}`}><button className='bg-cyan-400 p-3 mt-2'>Show Details</button></Link>
             */}
            <button onClick={handleClickBack} className="bg-cyan-400 p-3 mt-2">
              Back
            </button>
          </div>
        </div>
      </div>
    );
};

export default ProductsDetails;