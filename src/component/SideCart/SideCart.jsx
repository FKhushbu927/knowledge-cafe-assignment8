import React, { useEffect, useState } from 'react';
const SideCart = ({ spentTime}) => {

    const [readTime, setReadTime] = useState(spentTime);
    // const [showBlogDetails, setShowBlogDetails] = useState(blogDetails);
    // const[countBookMark, setCountBookMark] = useState(bookMark);


    useEffect(() => {
        const getSpentTime = localStorage.getItem("spentTime");
        setReadTime(getSpentTime);
    }, [spentTime]);

    // useEffect(() => {
    //     const getShowBlogDetails = localStorage.getItem("blogDetails");
    //     setShowBlogDetails(getShowBlogDetails);
    // }, [blogDetails]);

    // useEffect(()=>{

    //       const getBookMark = localStorage.getItem("bookMark");
    //       setCountBookMark(getBookMark);
    // },[bookMark]);
    return (
        <div>
            <div className="bg-primary-subtle p-3 my-4 rounded">
                <h4>Spent Time on Read: <span style={{ color: "blue" }}>{readTime} min</span></h4>
            </div>
            <div className='bg-dark-subtle p-3 my-4 rounded'>
                <h4 className='mb-2'>Bookmarked Blogs:</h4>
                <div className='bg-white rounded m-2'>
                    {/* <p className='p-1 m-1'>{showBlogDetails}</p>  */}
                   
                </div>

            </div>
        </div>
    );
};

export default SideCart;