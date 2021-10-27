
import React, {useState} from 'react';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa'
import Businesscard from './BusinessCard/Businesscard.jsx'
import './ImageSlider.scss'
import Dom from './Dominik.png'

const iconlist =[' https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white',
'https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white',
'	https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
'https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white',
'https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white'
];



function ImageSlider({slides}) {

    const [state, setstate] = useState(0);
    const length = slides.length

    const nextSlide = () => {
        setstate(state    === length -1  ? 0 : state + 1)
    }

    const prevSlide = () => {
        setstate(state === 0 ? length -1: state -1)
    }

    console.log(state);

    if (!Array.isArray(slides) || slides.length <= 0){
        return null
    }


    return (
        
        <div className='Imageslider'>

        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
           <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>




       



         

           <div className="container">
           <Businesscard img_url={Dom} name="Jan Dominik Franz" specialisation_list="UI for Embedded Systems " text= "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." 
 badges={iconlist}  projpage_link_url=" link_prop" />
 


               
                
            



          

            </div>

        </div>
    );
}

export default ImageSlider
