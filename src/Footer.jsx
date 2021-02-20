import React from 'react';
import linkedIn from './images/in.png';
import github from './images/hub.png';

export default function Footer(){
    return (
        <div className="footer-div">
            <div className="contact-details">
                Mobile: 9882321090
            </div>
            <div className="contact-details">
                Email: rakshak.kapoor1997@gmail.com
            </div>
            <div className="links">
                <a href="https://github.com/Being-Maverick" target="_blank">
                    <img src={github} alt="Github" width="50" height="50"/>
                </a>
                <a href="https://www.linkedin.com/in/charchit-kapoor/" target="_blank">
                    <img src={linkedIn} alt="LinkedIn" width="50" height="50"/>
                </a> 
            </div>           
        </div>
    );
}