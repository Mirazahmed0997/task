import React from 'react';
import logo from '../../assets/logolight.jpg'

const Header = () => {
    return (

        <div className="p-6 navbar bg-base-100 bg-current">
            <div className="flex-1 ">
                <div className="flex">
                    <div className='w-24 rounded'>
                        <img src={logo} />
                    </div>
                    <div className='text-white p-2 grid justify-items-start'>
                        <h4 className='font-bold'>Lightshot (Lightshot tool)</h4>
                        <h1>Skillsbrains</h1>
                        <h1>FREE - In Google Play</h1>
                    </div>

                </div>
            </div>
            <div className="flex-none">
                <button className="px-2 text-white box-border bg-sky-500 font-bold">
                    VIEW
                </button>
            </div>
        </div>
    );
};

export default Header;