import React from 'react';

const NavBar = () => {
    return (
        
        <div className='w-11/12 mx-auto'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    
                    <p className='text-[#9514fa] font-bold text-5xl'>DogiTools</p>
                </div>
                <div className="navbar-center  flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                   <p>Login</p>
                   <button className='ml-2.5 btn rounded-2xl btn-primary'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;