import React from 'react';
import Slider from 'react-slick';
import video1 from './videos/IssueTracker.mp4';
import video2 from './videos/SpringProject.mp4';
import video3 from './videos/AdaptiveAssesment.mp4';
import arrow from './images/upsell-cr.svg';

export default function Projects(){
    let videos = [video1, video2, video3];
    let settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <img src={arrow}/>,
        prevArrow: <img src={arrow}/>,
    }

    let desription1 = `This project is called Issue-Tracker. 
                       It provides its users to keep track of any kind of issue,
                       along with the ability to update its status, whether it is finished, closed or assigned.
                       It supports all the CRUD features regarding to issues, however some operations such as delete,
                       requires the user to login using Google Account. It is based on the MERN stack.`;

    let description2 = `This is a basic project created using Spring MVC, and Hibernate,
                        with MySQL as the database. It provides user with the basic functionality,
                        to create, read, update or delete his account.`

    let description3 = `This is the task I completed during the hackathon Game-Of-Codes in 2019.
                        The task was to write a console-based quiz application, that asks the user his
                        name and email, and then asks ten questions from the user. The focus of the task was
                        to design an algorithm that depending on the user's reply (right/wrong), changes the 
                        difficulty-level of the next question. At the end, the graph of the user scores was displayed`;

    let descriptions = [desription1, description2, description3];

    videos = videos.map((it, index) => {
        return <div key={descriptions[index]}>
            <video width="100%" height="80%" controls>
                <source src={it} type="video/mp4"/>
            </video>
            <div className="description">
                {
                    descriptions[index]
                }
            </div>
        </div>
    })

    return(
        <div className="slider-div">
        <Slider {...settings}>       
                {
                    videos
               }
        </Slider>
        </div>
    )
}