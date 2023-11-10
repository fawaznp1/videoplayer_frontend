import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar className='bg-body-dark'>
      <Container>
        <Navbar.Brand >
          <Link to={'/'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}>
          <i class="fa-solid fa-video fa-beat text-warning me-3" style={{color:"blue"}}></i>
          VideoPlayer
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header