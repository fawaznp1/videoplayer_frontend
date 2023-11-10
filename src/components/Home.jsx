import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import Add from './Add';
import View from './View'



function Home() {
  const [uploadVideoStatus,setUploadVideoStatus]=useState({})
  return (
    <>
    <div className='container mt-5 mt-5 d-flex justify-content-between align-items-center'>
    <div className='add-videos'>
     <Add setUploadVideoStatus={setUploadVideoStatus} />
    </div>
    <Link to={'/watchhistory'} style={{textDecoration:"none",color:"white",fontSize:"30px"}}>Watch History</Link>
    </div>
    <div className='container-fluid w-100 mt-5 mb-5 d-flex justify-content-between'>
    <div className='all-videos col-lg-9'>
        <h4 className='mb-5'>All videos</h4>
        <View uploadVideoStatus={uploadVideoStatus}/>
    </div>
    <div className='category col-lg-3'>
  <Category/>
    </div>
    </div>
    </>
  )
}

export default Home