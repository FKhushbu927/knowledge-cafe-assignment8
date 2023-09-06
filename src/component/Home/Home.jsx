import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import SideBar from './../SideBar/SideBar';
import { addToDb, getBlog } from '../../Utilities/fakedb';


const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookMark, setBookMark] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    useEffect(() => {
        const storedBlog = getBlog();
        const savedBookMark = [];
         // step:1 get id 
        for (const id in  storedBlog ) {
           // get blog from blogs state  by using id
            const addedBlog = blogs.find(blog => blog.id === id);
              
            // get quantity of the blog
            if (addedBlog) {
                // add quantity
                const quantity = storedBlog[id];
                addedBlog.quantity = quantity;
                //add the added blog to the saved bookmark
                savedBookMark.push(addedBlog);
            }
        }
        // set the bookmark
         setBookMark(savedBookMark);
        
}, [blogs]);


const handleAddToBookMark = (blog) => {
  
    let newBookMark = [];
    const exists = bookMark.find(bMark => bMark.id === bookMark.id);
    if (!exists) {
        blog.quantity = 1;
        newBookMark = [...bookMark, blog];
    }
    else {
        exists.quantity = exists.quantity + 1;
        const remaining = bookMark.filter(bMark => bMark.id !== bookMark.id);
        newBookMark = [...remaining, exists];
    }

    setBookMark(newBookMark);
    // addToDb(blog.id);
  
}
// const handleSpentTime = () =>{

// }
return (
    <>
        <div className='d-flex '>
            <div className="mx-2 col-md-8 blog-container">
                <div className='card'>
                    {
                        blogs.map((blog) => (
                            <Blog

                                key={blog.id}
                                blog={blog}
                                handleAddToBookMark={handleAddToBookMark}
                                
                            ></Blog>
                        ))
                    }

                </div>

            </div>
            <div className='col-md-4'>
                <SideBar
                    bookMark={bookMark}
                ></SideBar>
            </div>
        </div>

    </>
);
};

export default Home;