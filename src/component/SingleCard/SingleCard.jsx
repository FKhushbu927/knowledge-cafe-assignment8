import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const SingleCard = ({blog,handleWatchTime}) => {
    return (
        <>
         
          
                    <div className="cover-image m-auto ">
                        <img className='rounded my-2' style={{ height: "400px", width: "800px"}} src={blog.cover} alt="" />
                    </div>

                    <hr className='mx-2'/>
                    
                    <div className='mx-5 my-4 d-flex justify-content-between'>
                    <div className="author d-flex">
                         <div className="author-image">
                            <img className='rounded-circle' style={{ height: "100px", width: "100px"}} src={blog.author} alt="" />
                         </div>
                         <div className="author-detail ms-2">
                            <h4 >{blog.authorName} </h4>
                            <p>{blog.date}</p>
                         </div>
                          
                    </div>
                    <div className='timeAndBookmark d-flex justify-content-between'>
                                <p className='spent-time me-5'>{blog.spentTime}<span> min read</span></p>

                                <span onClick={() => handleWatchTime(blog.spentTime)}
                        
                                
                                ><FontAwesomeIcon icon={faBookmark} /></span>
                   </div>
                    </div>
                    <div className='mx-5 my-2'>
                        <h2 className='mx-3'>{blog.description}</h2>
                        <p className='my-3'>{blog.tag}</p>
                        <span><a className='fw-bold' href="#">Mark as read</a></span>
                    </div> 
             
        </>
    );
};

export default SingleCard;