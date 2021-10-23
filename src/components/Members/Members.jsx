import React from 'react'
import './Members.scss'
import {Card,Button, Carousel ,Container, Row , Col } from 'react-bootstrap'; 
import Dom from './Dominik.png';
import Jan from './Jannis.png';
import Max from './Max.png';
import { DomainDisabledOutlined } from '@material-ui/icons';


function Members() {
    return (
        <div className="members" id='members'>
          <h1 className="headline">Engineers</h1>

          <div className="CarouselContainer">
          <Carousel class='Carousel'>

            <Carousel.Item  className="CarouselItem" >
              <Container>

              <Card style={{ width: '80vw' }} className="CarouselCard">
                <Row>
                  <Col>
                  <Container>
              <img src={Jan} alt={Jan} height="300px"  width='300px'/>
              <Card.Body>
                <Card.Title style={{ overflow: 'hidden' }} >Jannis Kaiser</Card.Title>
               
                <Button variant="primary">Projects</Button>
              </Card.Body>
              </Container>
              </Col>
              <Col>
              <Container>
              hier muss ein schöner text hin
              </Container>
              </Col>
              </Row>
            </Card>
              </Container>
            </Carousel.Item>



            <Carousel.Item  className="CarouselItem" >
              <Container>

              <Card style={{ width: '80vw' }} className="CarouselCard">
                <Row>
                  <Col>
                  <Container>
              <img src={Max} alt={Max} height="300px"  width='300px'/>
              <Card.Body>
                <Card.Title style={{ overflow: 'hidden' }} >Maximilian Faltermeier</Card.Title>
               
                <Button variant="primary">Projects</Button>
              </Card.Body>
              </Container>
              </Col>
              <Col >
              <Container>
              hier muss ein schöner text hin
              </Container>
              </Col>
              </Row>
            </Card>
              </Container>
            </Carousel.Item>



            <Carousel.Item  className="CarouselItem" >
              <Container>

              <Card style={{ width: '80vw' }} className="CarouselCard">
                <Row>
                  <Col>
                  <Container>
              <img src={Dom} alt={DomainDisabledOutlined} height="300px"  width='300px'/>
              <Card.Body>
                <Card.Title style={{ overflow: 'hidden' }} >Dominik Franz</Card.Title>
               
                <Button variant="primary">Projects</Button>
              </Card.Body>
              </Container>
              </Col>
              <Col>
              <Container>
              hier muss ein schöner text hin
              </Container>
              </Col>
              </Row>
            </Card>
              </Container>
            </Carousel.Item>






            
                
          </Carousel>
             



          </div>
          
        </div>
   
    )
}

export default Members



