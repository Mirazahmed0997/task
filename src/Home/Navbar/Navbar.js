import React from 'react';
import { FaDownload } from "react-icons/fa";
import logo from '../../assets/logolight.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";





const Navbar = () => {
    return (
        <div className="navbar bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className=''>
                            <a className='btn btn-neutral'>English</a>
                            <ul className="p-2 text-black ">
                                <li><a>Bangla</a></li>
                            </ul>
                        </li>
                        <li><a>Sign In</a></li>
                    </ul>
                </div>
                <div className="flex">
                    <div className='w-12 rounded'>
                        <img src={logo} />
                    </div>
                    <div className='text-white italic p-2 grid justify-items-start'>
                        <h4 className='font-bold'>Lightshot </h4>
                        <span>Screen Capture tool</span>

                    </div>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='mr-6'>
                        <details>
                            <summary className=''>English</summary>
                            <ul className="p-2 text-black">
                                <li><a>Bangla</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Sign In</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    <div>

                    </div>
                    <div className='flex'>
                        <div className='flex gap-2 px-6'>
                            <FaTwitter></FaTwitter>
                            <FaFacebookF />

                        </div>
                        <button className="px-2 text-white box-border bg-indigo-500 flex  items-center rounded">

                                <FaDownload />| Download Lightshot for free
                            
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;