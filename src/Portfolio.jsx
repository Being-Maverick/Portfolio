import React, {Component} from 'react';
import Projects from './Projects';
import Footer from './Footer';

export default class Portfolio extends Component{
    
    constructor(){
        super();
        this.state = {
            showProjects: false
        }
    }

    onClick = () => {
        this.setState({showProjects: !this.state.showProjects});
    }

    render(){
        return(
            <div className="portfolio">
                <div className="intro">
                    <h1>
                        Greetings
                    </h1>
                    <div>
                        Hello, I am Charchit. I am looking for job opportunities as 
                        a Full-Stack Developer, Software Developer etc.
                        I am a MongoDB Certified Developer and
                        I have completed my Bachelor's from Jaypee University of Information
                        Technology, Solan, Himachal Pradesh. If you have any open job-opportunities 
                        please contact on the details mentioned at the bottom of the page and make sure to check my projects,
                        by clicking on the button below.
                    </div>
                </div>
                <div className="button-div">
                <button className = "project-button" onClick={this.onClick}>
                    {this.state.showProjects ? "Hide projects" : "View Projects"}
                </button>
                {
                    this.state.showProjects && <Projects/>
                }
                </div>
                <Footer/>
            </div>
        )
    }
}