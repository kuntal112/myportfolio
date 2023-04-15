import React from 'react'
function SkillCard(props) {
    return (
        <div id='div1' data-aos={props.effect} className="card skill-bar-container text-center ">
             <div className="skill-desc">
                <div className="sqdiv"><h3>Fast Running Code<br></br>{"</>"}</h3></div>
                <div className="sqdiv"><h3>Responsive UI Design<br></br>{"*{ }"}</h3></div>
                <div className="sqdiv"><h3>Full Stack</h3></div>
            </div>
            <div className="skill-bar">
                <li><h5>HTML</h5>
                    <span className="bar"> <span className="html" style={{width:"90%"}}>90%</span></span>
                </li>
                <li><h5>CSS</h5>
                    <span className="bar"><span className="css" style={{width:"80%"}}>80%</span></span>
                </li>
                <li><h5>JAVASCRIPT</h5>
                    <span className="bar"><span className="javascript" style={{width:"85%"}}>85%</span></span>
                </li>
                <li><h5>BOOTSTRAP</h5>
                    <span className="bar"><span className="bootstrap" style={{width:"90%"}}>90%</span></span>
                </li>
                <li><h5>REACT</h5>
                    <span className="bar"><span className="react" style={{width:"75%"}}>75%</span></span>
                </li>
                <li><h5>MONGODB</h5>
                    <span className="bar"><span className="mongodb" style={{width:"90%"}}>90%</span></span>
                </li>
                <li><h5>NODEJS</h5>
                    <span className="bar"><span className="nodejs" style={{width:"85%"}}>85%</span></span>
                </li>
            </div>
            
        </div>
    )
}

export default SkillCard
