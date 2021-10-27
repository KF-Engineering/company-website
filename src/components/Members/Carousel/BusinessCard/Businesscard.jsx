
import './Businesscard.scss'
import React from 'react'
import { Button}  from  'react-bootstrap';

function Businesscard({img_url, name, specialisation_list, text, badges, projpage_link_url}) {
    return (
       <div className="businesscard">

            <div className="left">
                <div className="image">
                    <div className="img_container">
                     <img className="actual_image" src={img_url} alt="here should be an image" />

                    </div>
                    
                </div>
                <div className="Name_field">
                    <h1 className="h1">{name}</h1>

                </div>
                <div className="Specialized_field">
                    <h3 className="h3" >{specialisation_list}</h3>
                </div>
             </div>


            <div className="right">
                <div className="textfield">
                    <h4 className="title"> About me:</h4>
                    <div className="text">{text}</div>

                </div>
                <div className="skills">
                    <h4 className="title"> skills:</h4>
                    <ul className='badgeslist'>
                        
                          

                                {badges.map(badge => (
                                    <li>
                                      <img src={badge} alt="here should be badges" />
                                    </li>
                                  ))}
                           
                        
                    </ul>

                </div>
                <div className="projects">
                <a href={projpage_link_url}><div className="Button"><Button  size ='lg' variant='danger' color='crimson '>projects</Button>
                   
                </div></a>
                </div>
            


            </div>
        </div>
       





       
    )
}

export default Businesscard

/* <Businesscard img_url="" name="name" specialisation_list=" 
speciality1 speciality2 " text= " Hello I am an awesome engineer" 
 stats_obj=" here should be icons" projpage_link_url=" link_prop" /> */
