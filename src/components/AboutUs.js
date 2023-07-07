import React, { useEffect, useContext } from 'react'
import { routeContext } from "../App"
import SocialLinks from './SocialLinks'
import {experiances} from '../data'
import TimeLineCard from './TimeLineCard'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function AboutUs() {
    let { dispatch } = useContext(routeContext);
    let age = () => {
        const dob = new Date("11/06/1997");
        const currDate = new Date();
        return parseInt(((currDate - dob) / 31536000000));
    }
    
    useEffect(() => {
        dispatch({ page: "home", payload: { next: "skills", prev: "" } })
        return ()=>window.speechSynthesis.cancel();
    }, [dispatch])

    let speechHandler = () => {
        if ("webkitSpeechRecognition" in window) {
            console.log("yes available")
            // let speechRecognition = new webkitSpeechRecognition();
            let speech = new SpeechSynthesisUtterance();
            speech.text = document.getElementById("textToSpeech").innerText;
            speech.pitch = 1.9;
            window.speechSynthesis.speak(speech);

        }
        else {
            console.log("not available")
        }
    }
    return (
        <div className="" id="aboutus-div" >
            <div className="fixed-heading">
                <h1 className="component-headings">About Me</h1>
                <hr className=""></hr>
            </div>

            <div className="card-container">

                <div className="about-me-card  ">
                    <div className="about-me-image">
                        <LazyLoadImage src="technologies/mypico.jpg" alt="" onClick={speechHandler}></LazyLoadImage>
                    </div>
                    <div className="card-body about-card ">
                        <h5 className="card-title pt-3">Who Am I &#8263;</h5>
                        <p className="card-text" id="textToSpeech">I am <span className="font-bold">KUNTAL</span>, a {age()} years old Full Stack Web developer,living in WestBengal, India. I am an I.T Graduate.<br></br>

                            Have a look at my projects, skills or just connect with me on LinkedIn.<br></br> I am always excited to work with like minded people, lets discuss about the new project.
                        </p>
                        <a className="btn cvbtn" href="/technologies/KuntalDas.pdf" download ><button>Download CV</button></a>

                    </div>
                    <SocialLinks />
                </div>
                <div className="timeline-container">
                    <div className="edu-timeline-box">
                        <h1>Experiance</h1>
                        <div className="timeline">
                            {
                                experiances.length>=1 && 
                                [...experiances].reverse().map(experiance=>{
                                    let {id,year,degree,organization,description}=experiance;
                                    return <TimeLineCard key={id} year={year} Degree={degree} organization={organization} description={description} />
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs
