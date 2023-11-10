import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHistory } from './services/allAPI';
import { Button } from 'react-bootstrap';
import { removeFromWatch } from './services/allAPI';

function WatchHistory() {
  const [history,setHistory]=useState({})
  const watchAllHistory=async()=>{
    const {data}=await getAllHistory()
    console.log(data);
    setHistory(data)
  }
useEffect(()=>{
  watchAllHistory();
},[])

const removeFromWatchHistory=async(id)=>{
  await removeFromWatch(id)
  watchAllHistory()
}
  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
    <h1>Watch History</h1>
    <Link to={'/home'}className='d-flex align-items-center' style={{textDecoration:"none",color:"black",fontSize:'20px'}}>
      <i class="fa-solid fa-arrow-left fa-beat me-2"></i>
      Back to home
    </Link>
  </div>
  

  <table className='table mt-5 mb-5 container'>
    <thead>
      <tr>
        <th>#</th>
        <th>Caption</th>
        <th>URL</th>
        <th>Time stamp</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {history?.length>0?
      history?.map((item,index)=>(
        <tr>
        <td>{index+1}</td>
        <td>{item.caption}</td>
        <td><a href={item.embedUrl} target='_blank'>{item.embedUrl}</a></td>
        <td>{item.timestamp}</td>
        <td><Button className='btn btn-danger' onClick={()=>removeFromWatchHistory(item?.id)}><i class='fa-solid fa-trash-can'></i></Button>
        </td>
      </tr>
      ))
      :
      <p>Nothing to display</p>
      }
       
      
     
     
    </tbody>
  </table> 
  
  </>
)
}
  

export default WatchHistory