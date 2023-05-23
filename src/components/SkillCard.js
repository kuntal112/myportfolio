import React from 'react'
import Skill from './Skill'
import { skills } from '../data'
function SkillCard(props) {
    return (
        <div id='div1' className="card skill-bar-container text-center ">
            <div className="skill-desc">
                <div className="sqdiv"><h3>Fast Running Code<br></br>{"</>"}</h3></div>
                <div className="sqdiv"><h3>Responsive UI Design<br></br>{"*{ }"}</h3></div>
                <div className="sqdiv"><h3>Full Stack</h3></div>
            </div>
            <div className="skill-bar">
                {skills.length >= 0 && skills.map(skill => {
                    return <Skill key={skill.id} percentage={skill.percentage} skill={skill.name} />
                })}
            </div>

        </div>
    )
}

export default SkillCard
