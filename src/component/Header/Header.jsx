import React from 'react';

const Header = () => {
    return (
        <>
        <div className=' mt-5 m-5 p-3 d-flex justify-content-between'>
                 <div>
                     <h1 className='ms-5 text-info'>Knowledge cafe</h1>
                 </div>
         
                       <img className='border border-5 border-primary rounded-circle me-5'  style={{ height: "100px", width: "100px"}}  
                       src="/src/assets/author.avif" alt="" />
                </div>
        </>
    );
};

export default Header;