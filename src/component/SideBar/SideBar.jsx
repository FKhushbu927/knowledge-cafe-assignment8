import React from 'react';

const SideBar = ({bookMark}) => {

   let quantity = 0;
//    let totalSpentTime = 0;

   for(const blog of bookMark){
    
            quantity = quantity + blog.quantity;
   }
 

    return (
        <>
              <div className="bg-primary-subtle p-2 my-4 rounded">
                        {/* <h4>Spent Time on Read: <span style={{ color: "blue" }}> min</span></h4> */}
                    </div>
                    <div className='bg-dark-subtle p-3 my-4 rounded'>
                        
                           {/* <h4 className='mb-2'>Bookmarked Blogs:{quantity}</h4> */}
                           <p>BookMarked Blogs: {quantity}</p>

                        <div className=''>
                            <p className='bg-white rounded m-2 p-4 m-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, hic.</p>  
                            <p  className='bg-white rounded m-2 p-4 m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem eius veniam doloremque voluptatibus dolor.</p>
                            <p  className='bg-white rounded m-2 p-4 m-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quasi doloribus voluptatem officia odio fugit. Perferendis suscipit officiis hic quo!</p>
                            <p  className='bg-white rounded m-2 p-4 m-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quasi doloribus voluptatem officia odio fugit. Perferendis suscipit officiis hic quo!</p>
                            <p  className='bg-white rounded m-2 p-4 m-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quasi doloribus voluptatem officia odio fugit. Perferendis suscipit officiis hic quo!</p>
                            <p  className='bg-white rounded m-2 p-4 m-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quasi doloribus voluptatem officia odio fugit. Perferendis suscipit officiis hic quo!</p>
                            <p  className='bg-white rounded m-2 p-4 m-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quasi doloribus voluptatem officia odio fugit. Perferendis suscipit officiis hic quo!</p>

                            <p  className='bg-white rounded m-2 p-4 m-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quasi doloribus voluptatem officia odio fugit. Perferendis suscipit officiis hic quo!</p>

                        </div>
                    </div>
        </>
    );
};

export default SideBar;