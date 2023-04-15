import React from 'react'

function Works(props) {
    return (
        <div className={`work ${props.class}` }>
            <h3 className="work-title">{props.title}</h3>
            <img width="100%" height="100%" alt="" src={props.imgsrc}></img>
            {/* <p className="work-description">{props.project_description}</p> */}
            <button > <a href={props.link} target="_blank"> Click here to visit </a></button>
            
        </div>
    )
}

export default Works
