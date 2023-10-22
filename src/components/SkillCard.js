import React, { useEffect, useState } from 'react'
import Skill from './Skill'
function SkillCard(props) {
    const [skills,setSkills]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        fetch(process.env.REACT_APP_SKILL_DATA_URL)
        .then(res=>res.json())
        .then(skills=>{
            setSkills(skills)})
            .catch(e=>console.warn(e));
    },[])
    return (
        <div id='div1' className="card skill-bar-container text-center ">
            <div className="skill-desc">
                <div className="sqdiv"><h3>Fast Running Code<br></br>{"</>"}</h3></div>
                <div className="sqdiv"><h3>Responsive UI Design<br></br>{"*{ }"}</h3></div>
                <div className="sqdiv"><h3>Full Stack</h3></div>
            </div>
            <div className="skill-bar">
                {skills.length > 0 ?
                     skills.map(skill => {
                    return <Skill key={skill.id} percentage={skill.percentage} skill={skill.name} />
                }):
                <h3>Loading...</h3>
            }
            </div>

        </div>
    )
}

export default SkillCard
