import React from 'react'

function TimeLineCard(props) {
    return (
        <div className="timeline-cards">
            <div className="point"></div>
            <h3>{props.year}</h3>
            <h3>{props.Degree}</h3>
            <h5><span>From: </span>{props.organization}</h5>
            <h5>{props.description}</h5>
        </div>
    )
}

export default TimeLineCard

