import React from 'react';
import './TableContent.css'

function TableContent({firstName,lastName,empid,age}) {
    return (
        <div className='TableContent'>
            {/* {firstName +"."+lastName+"." +empid+"." +age} */}
            <div className='TableContent_details'>
                    <div>
                        <div className='Table-headings'>FirstName</div>
                        <div>{firstName}</div>
                    </div>

                    <div>
                        <div className='Table-headings'>LastName</div>
                        <div>{lastName}</div>
                    </div>
                    
                    <div>
                        <div className='Table-headings'>Employee Id</div>
                        <div>{empid}</div>
                    </div>
                    
                    <div>
                        <div className='Table-headings'>Age</div>
                        <div>{age}</div>
                    </div>
            </div>

            <div>
                <div>Hii</div>
                <div>World</div>
            </div>
           
        </div>
    );
}

export default TableContent;