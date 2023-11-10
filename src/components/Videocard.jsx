import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { addToHistory, deleteVideo } from './services/allAPI';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';


function Videocard({displaycard,setDeleteVideoStatus}) {
  const [show,setShow]=useState(false);
  const handleClose=()=>setShow(false);
  const handleShow=async()=>{
    setShow(true);
  const {caption,embedUrl}=displaycard
  const today= new Date()
  let timestamp=new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
  console.log(timestamp);
  let videoDetails={
    caption,embedUrl,timestamp
  }
  const response=await addToHistory(videoDetails)
  console.log(response);
  }

  const removeVideo=async(id)=>{
    const response =await deleteVideo(id)
    setDeleteVideoStatus(true)
    console.log(response);
  }
   const dragStart=(e,id)=>{
    console.log(`card that dragged is ${id}`);
    //to transfer id from videocard to category as key:value pair.
    e.dataTransfer.setData("videoId",id)
   }



  return (
    <div>
          <Card style={{ width: '100%', height:'300px'}} draggable onDragStart={(e)=>dragStart(e,displaycard?.id)}>
      <Card.Img onClick={handleShow} variant="top" height='200px' src={displaycard.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
            <h6>{displaycard.caption}</h6>
        </Card.Title>
        <Button className='btn btn-danger' onClick={()=>removeVideo(displaycard?.id)} > <i class='fa-solid fa-trash-can'></i></Button>
      </Card.Body>
    </Card>

    <Modal 
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}>
    <Modal.Header closeButton>
          <Modal.Title>{displaycard.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="480" src={`${displaycard.embedUrl}?autoplay=1`} title= {displaycard.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        </Modal>

    </div>
  )
} 

export default Videocard