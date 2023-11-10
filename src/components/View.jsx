import React, { useEffect, useState } from 'react';
import Videocard from './Videocard';
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from './services/allAPI';

function View({uploadVideoStatus}) {
  const [allVideo,setAllVideo]=useState([])

  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  
  const getAllUploadVideos =async ()=>{
    const response= await getAllVideos()
    console.log(response);
    const {data}=response
    setAllVideo(data)
   }

   useEffect(()=>{
     getAllUploadVideos()
     setDeleteVideoStatus(false)
   },[uploadVideoStatus,deleteVideoStatus])
  return (
   
    <>
    <Row>{
      allVideo.length>0?allVideo.map((video)=>(
      
        <Col sm={12} md={6} lg={4} xl={3}>
        <Videocard displaycard={video} setDeleteVideoStatus={setDeleteVideoStatus} />
        </Col>))
        :
        <p>Nothing to show</p>
      }
    </Row>
    </>
    )
}

export default View