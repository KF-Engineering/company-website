import React from 'react'
import './Members.scss'
import {Card,Button, Carousel ,Container, Row , Col } from 'react-bootstrap'; 
import { SliderData } from './Carousel/SliderData.jsx';
import { DomainDisabledOutlined } from '@material-ui/icons';
import ImageSlider from './Carousel/ImageSlider.jsx'


function Members() {
    return (
       <div className="members">
        <ImageSlider slides={SliderData}/>

       </div>
    )
}

export default Members



