import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './nav.css'

const Navbar = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4'>
            
            <div className='flex justify-between font-bold text-xl mb-11 bg-cyan-200 p-4 sticky top-0'>
                <h1>Bhola<span className='text-orange-500'>Surgical</span></h1>
                <div className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/signup">Sign Up</Link>
        

                </div>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Navbar;