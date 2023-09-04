import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import SideBar from './../SideBar/SideBar';
import { addToDb, getBlog } from '../../Utilities/fakedb';


const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookMark, setBookMark] = useState([]);
    // const [spentTime, setSpentTime] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    // useEffect(() => {

    //     const storedTime = getTime();
    //     const savedReadTime = [];
    //     for (const spentTime in storedTime) {
    //         const addedTime = spentTime.find(Readtime => Readtime.id === Readtime.id);

    //         if (addedTime) {
    //             const spentTime = storedTime[Readtime];
    //             addedBlog.spentTime = spentTime;
    //             savedReadTime.push(addedTime);
    //         }
    //     }
    //     setSpentTime(savedReadTime);

    // }, [spentTime]);


    useEffect(() => {
        // console.log(blogs)
        const storedBlog = getBlog();
        const savedBookMark = [];


        for (const id in storedBlog) {
            //  console.log(id);
            const addedBlog = blogs.find(blog => blog.id === blog.id);

            if (addedBlog) {
                const quantity = storedBlog[id];
                addedBlog.quantity = quantity;
                savedBookMark.push(addedBlog);
            }
        }
    

         setBookMark(savedBookMark);
}, [blogs]);


const handleAddToBookMark = (blog) => {
    // const newBookMark = [...bookMark, blog];
    let newBookMark = [];
    // let newSpentTime = [];
    const exists = bookMark.find(bookMark => bookMark.id === bookMark.id);
    if (!exists) {
        blog.quantity = 1;
        newBookMark = [...bookMark, blog];
    }
    else {
        exists.quantity = exists.quantity + 1;
        const remaining = bookMark.filter(bookMark => bookMark.id !== bookMark.id);
        newBookMark = [...remaining, exists];
    }

    setBookMark(newBookMark);
    addToDb(blog.id);
}
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