import React, { useEffect, useContext } from 'react'
import { routeContext } from "../App"
import SocialLinks from './SocialLinks'
import TimeLineCard from './TimeLineCard'
function AboutUs() {
    let { dispatch } = useContext(routeContext);
    let age = () => {
        const dob = new Date("11/06/1997");
        const currDate = new Date();
        return parseInt(((currDate - dob) / 31536000000));

    }
    useEffect(() => {

        dispatch({ page: "home", payload: { next: "skills", prev: "" } })
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

            <div className="card-container" data-aos="zoom-in" data-aos-easing="ease-in-sine">

                <div className="about-me-card  ">
                    <div className="about-me-image">
                        <img src="technologies/mypico.jpg" alt="" onClick={speechHandler}></img>
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
                        <h1>Education</h1>
                        <div className="timeline">
                            <TimeLineCard year="2022-July..." Degree="Programmer Analyst Trainee" organization="Cognizant" description="EE Full Stack Java Developer" />
                            <TimeLineCard year="2021-Dec To 2022-June" Degree="6 months of training FSE Java" organization="Cognizant" description="Full Stack Java Developer" />
                            <TimeLineCard year="2021-Aug To Nov" Degree="MERN Stack Internship " organization="Sigaram Software Technologies" description="Worked mainly on React" />
                            <TimeLineCard year="2020-Feb To 2021-July" Degree="Data Analyst" organization="Globsyn IT Services" description="Worked as Data Analyst" />
                            <div className="timeline-cards"><div className="point"></div>
                                <h3>2016-2020</h3>
                                <h3>Graduation</h3>
                                <h6>B.Tech (Information Technology) </h6>
                                <h5><span>From: </span>Maulana Abul Kalam Azad University of Technology</h5>
                                <h5>With 7.8 CGPA</h5>
                            </div>
                            <div className="timeline-cards"><div className="point"></div>
                                <h3>2014-2015</h3>
                                <h3>Higher Secondary Education</h3>
                                <h5><span>From: </span>W.B.C.H.S.E</h5>
                                <h5>With an aggregate of 78.04%</h5>
                            </div>
                            <div className="timeline-cards">
                                <div className="point"></div>
                                <h3>2013</h3>
                                <h3>Secondary Education</h3>
                                <h5><span>From: </span>W.B.B.S.E</h5>
                                <h5>With an aggregate of 75.5%</h5>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs
