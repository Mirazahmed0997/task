import React from 'react';
import './Body.css'; // Import your CSS file
import Incomplete from '../Incomplete/Incomplete';
import Todo from '../Todo/Todo';
import Doing from '../Doing/Doing';
import UnderReview from '../UnderReview/UnderReview';
import Completed from '../Completed/Completed';

const Body = () => {
    return (
        <body class=" ">
            <div class=" bg-base-500 overflow-x-scroll">
                    <div className='flex '>
                        <Incomplete></Incomplete>
                        <Todo></Todo>
                        <Doing></Doing>
                        <UnderReview></UnderReview>
                        <Completed></Completed>
                        <Completed></Completed>
                    </div>
            </div>
        </body>
    );
};

export default Body;