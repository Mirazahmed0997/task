import React from 'react';
import { MdIncompleteCircle } from "react-icons/md";
import { MdOutlineTexture } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { CiTextAlignJustify } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import { TiAttachment } from "react-icons/ti";








const Incomplete = () => {
    return (
        <div className="overflow-y-auto overflow-x-hidden h-96 w-1/4">
            <table className="table table-pin-rows">
                <thead>
                    <tr className='flex p-6'>
                        <MdIncompleteCircle className=''></MdIncompleteCircle>
                        <span className='ps-2'>Incomplete</span>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <div className=''>
                                <div className="flex justify-between p-4 ">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-xs dark:text-gray-400">Leroy Jenkins</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">

                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <span className="font-bold text-xs dark:text-gray-400">Leroy Jenkins</span>
                                    </div>
                                </div>




                                <div className="flex justify-between ">
                                    <div className="flex space-x-4">
                                        <div className='flex items-center p-4'>
                                            <CiTextAlignJustify />
                                            <span className=" text-xs text-gray-400">Lorem, ipsum dolor.</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                                        <FaCalendarAlt />
                                    </div>
                                </div>


                                <div className="flex items-center justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <IoChatbubblesOutline />

                                        {/* <TiAttachment ></TiAttachment> */}
                                        <label for="myfile"><TiAttachment></TiAttachment></label>
                                        <input  className=' hidden' type="file" id="myfile" name="myfile" />
                                        <FaCalendarAlt /> <span className=" text-xs text-gray-400">30-12-2024</span>

                                    </div>

                                </div>




                            </div>


                        </div>
                    </tr>
                    <tr>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <div className=''>
                                <div className="flex justify-between p-4 ">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-xs dark:text-gray-400">Leroy Jenkins</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">

                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <span className="font-bold text-xs dark:text-gray-400">Leroy Jenkins</span>
                                    </div>
                                </div>




                                <div className="flex justify-between ">
                                    <div className="flex space-x-4">
                                        <div className='flex items-center p-4'>
                                            <CiTextAlignJustify />
                                            <span className=" text-xs text-gray-400">Lorem, ipsum dolor.</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                                        <FaCalendarAlt />
                                    </div>
                                </div>


                                <div className="flex items-center justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <IoChatbubblesOutline />

                                        <TiAttachment></TiAttachment>
                                        <FaCalendarAlt /> <span className=" text-xs text-gray-400">30-12-2024</span>

                                    </div>

                                </div>




                            </div>


                        </div>
                    </tr>
                    <tr>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <div className=''>
                                <div className="flex justify-between p-4 ">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-xs dark:text-gray-400">Leroy Jenkins</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">

                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <span className="font-bold text-xs dark:text-gray-400">Leroy Jenkins</span>
                                    </div>
                                </div>




                                <div className="flex justify-between ">
                                    <div className="flex space-x-4">
                                        <div className='flex items-center p-4'>
                                            <CiTextAlignJustify />
                                            <span className=" text-xs text-gray-400">Lorem, ipsum dolor.</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                                        <FaCalendarAlt />
                                    </div>
                                </div>


                                <div className="flex items-center justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <IoChatbubblesOutline />
                                        <TiAttachment />
                                        <FaCalendarAlt /> <span className=" text-xs text-gray-400">30-12-2024</span>

                                    </div>

                                </div>




                            </div>


                        </div>
                    </tr>
                    <tr>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <div className=''>
                                <div className="flex justify-between p-4 ">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-xs dark:text-gray-400">Leroy Jenkins</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">

                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <span className="font-bold text-xs dark:text-gray-400">Leroy Jenkins</span>
                                    </div>
                                </div>




                                <div className="flex justify-between ">
                                    <div className="flex space-x-4">
                                        <div className='flex items-center p-4'>
                                            <CiTextAlignJustify />
                                            <span className=" text-xs text-gray-400">Lorem, ipsum dolor.</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                                        <FaCalendarAlt />
                                    </div>
                                </div>


                                <div className="flex items-center justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <IoChatbubblesOutline />
                                        <TiAttachment />
                                        <FaCalendarAlt /> <span className=" text-xs text-gray-400">30-12-2024</span>

                                    </div>

                                </div>




                            </div>


                        </div>
                    </tr>
                    <tr>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <div className=''>
                                <div className="flex justify-between p-4 ">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-xs dark:text-gray-400">Leroy Jenkins</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">

                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <span className="font-bold text-xs dark:text-gray-400">Leroy Jenkins</span>
                                    </div>
                                </div>




                                <div className="flex justify-between ">
                                    <div className="flex space-x-4">
                                        <div className='flex items-center p-4'>
                                            <CiTextAlignJustify />
                                            <span className=" text-xs text-gray-400">Lorem, ipsum dolor.</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                                        <FaCalendarAlt />
                                    </div>
                                </div>


                                <div className="flex items-center justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <IoChatbubblesOutline />
                                        <TiAttachment />
                                        <FaCalendarAlt /> <span className=" text-xs text-gray-400">30-12-2024</span>

                                    </div>

                                </div>




                            </div>


                        </div>
                    </tr>
                    <tr>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <div className=''>
                                <div className="flex justify-between p-4 ">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-xs dark:text-gray-400">Leroy Jenkins</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">

                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <span className="font-bold text-xs dark:text-gray-400">Leroy Jenkins</span>
                                    </div>
                                </div>




                                <div className="flex justify-between ">
                                    <div className="flex space-x-4">
                                        <div className='flex items-center p-4'>
                                            <CiTextAlignJustify />
                                            <span className=" text-xs text-gray-400">Lorem, ipsum dolor.</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                                        <FaCalendarAlt />
                                    </div>
                                </div>


                                <div className="flex items-center justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <IoChatbubblesOutline />
                                        <TiAttachment />
                                        <FaCalendarAlt /> <span className=" text-xs text-gray-400">30-12-2024</span>

                                    </div>

                                </div>




                            </div>


                        </div>
                    </tr>
                    <tr>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <div className=''>
                                <div className="flex justify-between p-4 ">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-xs dark:text-gray-400">Leroy Jenkins</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">

                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <span className="font-bold text-xs dark:text-gray-400">Leroy Jenkins</span>
                                    </div>
                                </div>




                                <div className="flex justify-between ">
                                    <div className="flex space-x-4">
                                        <div className='flex items-center p-4'>
                                            <CiTextAlignJustify />
                                            <span className=" text-xs text-gray-400">Lorem, ipsum dolor.</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                                        <FaCalendarAlt />
                                    </div>
                                </div>


                                <div className="flex items-center justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-6  rounded-full dark:bg-gray-500" />
                                        </div>
                                        <IoChatbubblesOutline />
                                        <TiAttachment />
                                        <FaCalendarAlt /> <span className=" text-xs text-gray-400">30-12-2024</span>

                                    </div>

                                </div>




                            </div>


                        </div>
                    </tr>


                </tbody>

            </table>
        </div>
    );
};

export default Incomplete;