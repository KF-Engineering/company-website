import React from 'react'
import './About.scss'
import {Container, Button}  from  'react-bootstrap';
import tinfoil from "./jannik-selz-uVxhbhuVWqg-unsplash.jpg";

function About() {
    return (
        <div className="about" id='about'>
            <div className="left">
            <div className="imgContainer">
                <div className="smallerimgContainer">
                <img src= {tinfoil} alt="/" />
                </div>
                

            </div>
            </div>
            <div className="right">
                <div className="headlines">
                    <h4>Hi there, we are </h4>
                <h1 className="headlineone"> Tinhat Engineering </h1>
                <h4 className='Text'>A Group of students and freelancers specialising in Embeddded Systems, and UI Design
                </h4>
            
            <a href="#contact"><div className="cta"><Button  size ='lg' variant='danger'>let's get in touch</Button>
            </div></a>
            
            </div></div>

            
            
            
            </div>
    )
}

export default About

