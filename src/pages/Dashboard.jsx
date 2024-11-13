import React from 'react'
import Header from '../components/Heeaader'
import { Container, Row, Col } from 'react-bootstrap'
import Myproject from '../components/Myproject';
import Profile from '../components/Profile';
const Dashboard = () => {
  return (
    <>
      <Header/>

      <div className="p-4">
        <h3>Welcome <span className='text-warning'>user</span> </h3>

        <Container>
          <Row className='mt-5'>
            <Col sm={12} md={8} >
            <Myproject/>
            </Col>
            <Col sm={12} md={4}>
            <Profile/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Dashboard
