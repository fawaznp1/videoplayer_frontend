import React, { useEffect, useState } from 'react'
import { Col, Form, FormLabel, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { addToCategory, cVideo, getAllCategory, updatCategory } from './services/allAPI';
import { deleteACategory } from './services/allAPI';
import Videocard from './Videocard';



function Category() {
  const [show,setShow]=useState(false)
  const [categoryName,setCategoryName]=useState("")
  const [category,setCategory]=useState([])
  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true)
  
  const handleAddCategory=async()=>{
    console.log(categoryName);
    if(categoryName){
      let body={
        categoryName,
        allVideos:[]
      }
      const response=await addToCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success("Category added succesfully")
        //to empty the state
        setCategoryName("")
        handleClose()
        allCategory()
      }
      else{
        toast.error("Error in adding the category")
      }
      
    }
    else{
      toast.warning("Please fill the form")
    }
  }
  const removeACategory=async(id)=>{
    await deleteACategory(id)
    //to gett all remaining catefory
    allCategory()
  }
  //function to get all categories
  const allCategory=async()=>{
    const {data} =await getAllCategory()
/*     console.log(data);
 */    /*  setCategory(data) */
    setCategory(data)
/*  console.log(category);
 */    
  }
  console.log(category);
  
  useEffect(()=>{
    allCategory()
  },[])
  const dragOver=(e)=>
  {
    e.preventDefault()
  }
  const videoDrop=async(e,Categoryid)=>{
    console.log('Category in which videocard is dropped',Categoryid);
    let videoID= e.dataTransfer.getData("videoID")
    console.log(videoID);
    //api to get a video details
    const {data}=await cVideo(videoID)
    console.log(data);
    let selectedCategory=category.find(item=>item?.id===Categoryid)
    console.log(selectedCategory);
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updatCategory(Categoryid,selectedCategory)
    allCategory();
  

  }
  return (
    <>
    <div className='d-grid ms-3'>
       <button onClick={handleShow} className='btn btn-warning'>Add new category</button> 
        </div>
        
        { category?.length>0?
        category?.map((item)=>(
        <div className='m-5 border border-secondary p-3 rounded' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <div className='d-flex justify-content-between align-items-center'>
            <h6>{item.categoryName}</h6>
            <td><Button onClick={()=>removeACategory(item.id)} className='btn btn-danger' ><i class='fa-solid fa-trash-can'></i></Button></td>
          </div>
        <Row>
          <Col>
          {
            item.allVideos.length>0?
            item.allVideos.map((card)=>(<Videocard displaycard={card}/>))
            :
            <p>Nothing to display </p>
          }
          </Col>
        </Row>
         
        </div>)):
        <p>Nothing to display (hold 5-10 seconds)</p>
        }
        <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <FormLabel>Category Name</FormLabel>
          <Form className='border border-warning rounded p-3'>
          <Form.Group className="mb-3" >
            <Form.Control type="text" placeholder="Enter category name" onChange={(e)=>setCategoryName(e.target.value)} />
           </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">Close</Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
        </Modal>
    </>
  )
}

export default Category