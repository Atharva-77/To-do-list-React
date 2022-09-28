import React from 'react';
import {Link} from 'react-router-dom';

const Heading = () => {
    return (
        <>
            <Link to="/" className='Anchortag_heading'>
                    <h2 className='Heading_div'>
                        To-Do-List
                    </h2>
             </Link>
        </>
    );
};

export default Heading;