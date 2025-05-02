import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Card  from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navigateByUrl=useNavigate()
  return (
    <>
  <Row className={'mt-5 mb-5 d-flex justify-content-center align-items-center'}>
    <Col> </Col>
    <Col lg={5}>
      <h3>Welcome To <span className='text-warning'> Media player</span></h3>
      <p className='mt-3'>
      Media Player is your personal hub for enjoying music anytime, anywhere. Browse, play, and organize your favorite songs with ease. With a clean design and smooth controls, it’s built to make your listening experience simple and enjoyable.
      </p>
      <button className='btn btn-warning mt-5' onClick={()=>navigateByUrl('/home')}>Get Started</button>
    </Col>
    <Col></Col>
    <Col lg={5}>
      <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
    </Col>
  </Row>
  <div className='container mt-5 mb-5 d-flex flex-column justify-content-center align-items-center flex-column'>
    <h3>Features</h3>
   <div className='cards d-flex justify-content-evenly align-items-center w-100'>
   <Card style={{ width: '18rem' }}>
      <Card.Img style={{ height: '215px', objectFit: 'cover' }}  variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
        Easily upload, watch, and organize your video collection in one place.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{ height: '215px', objectFit: 'cover' }} variant="top" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHRsYjMzYjhpbmg2NDFhcmRwMzJkemJ0NTJ0cno5bmNkbXZvMHh3YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EwKfD3kAzUghvQiTuw/giphy.gif" />
      <Card.Body>
        <Card.Title>Categorised Video</Card.Title>
        <Card.Text>
        Browse videos by category and find what you love fast.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{ height: '215px', objectFit: 'cover' }} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Watch history</Card.Title>
        <Card.Text>
        Keep track of videos you've watched and revisit anytime.
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
  </div>
    </>
  )
}

export default Landingpage