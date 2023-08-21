import React, { useEffect, useState } from 'react';
import SingleCard from './../SingleCard/SingleCard';


const Home = ({handleWatchTime}) => {
    const[blogs, setBlogs] = useState([]);
    useEffect(()=> {
        fetch("data.json")
        .then((res)=> res.json())
        .then((data) => setBlogs(data));
    },[]);
    return (
        <>
             <div className="mx-5 blog-container">
                <div className='card'>
                {
                    blogs.map((blog) => (
                        <SingleCard 
                        handleWatchTime = {handleWatchTime}
                        blog = {blog}
                        // showBlogDetails = {showBlogDetails}
                        // handleBookMark = {handleBookMark}
                        
                        ></SingleCard>
                    ))
                 }

                </div>
                
             </div>
        </>
    );
};

export default Home;