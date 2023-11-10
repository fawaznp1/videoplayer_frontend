import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from './services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  function Add({setUploadVideoStatus}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [videos,setVideos] =useState({
      id:"",
      caption:"",
      url:"",
      embedUrl:""
  
    })
    console.log(videos);
  
    const embedVideoLink = (e)=>{
      const{value} =e.target
      console.log(value.slice(-11));
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideos({...videos,embedUrl:link})
    }
    const handleUpload = async ()=>{
      const {id,caption,url,embedUrl} = videos
      //if there is no value in input box
      if(!id || !caption || !url || !embedUrl){
        toast.warning('please fill the form completely')
      }
      else{
        //if the value in the input box
        const response = await uploadAllVideo(videos)
        console.log(response);
        if(response.status>=200 && response.status<300){
          setUploadVideoStatus(response.data)
          toast.success(`${response.data.caption} is successfully uploaded`)
          //to close the modal
          handleClose()
        }
        else{
          
          toast.error('something went wrong try again ')
        }
      }
    }



  return (
    <>
    <div className='d-flex align-items-center'>
        <h5>Upload new video</h5>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-up"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <i class='fa-solid fa-film me-2 text-warning'></i>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Fill the form to upload a video</p>     
<form className='border border-secondary rounded p-3'>

<Form.Group className="mb-3" >
            <Form.Control type="text" onChange={(e)=>setVideos({...videos,id:e.target.value})} placeholder="Enter Video Id" />
           </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Control type="text" onChange={(e)=>setVideos({...videos,caption:e.target.value})} placeholder="Enter Video Caption" />
           </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Control type="text" onChange={(e)=>setVideos({...videos,url:e.target.value})} placeholder="Enter Video Image Url" />
           </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Control type="text"  placeholder="Enter YouTube Video Link" onChange={(e)=>{embedVideoLink(e)}} />
           </Form.Group>

</form>
   </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
           <i class='fa-solid fa-film me-2 text-warning'></i> Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored'  />
    </>
  )
}

export default Add

//<iframe width="873" height="491" src="https://www.youtube.com/embed/RLzC55ai0eo" title="Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//https://www.youtube.com/embed/